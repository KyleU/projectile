package models.database.input

import models.database.schema.Table
import models.export.config.{ExportConfigurationDefault, ExportConfigurationHelper}
import models.export.{ExportEnum, ExportModel}
import models.output.ExportHelper.{toClassName, toDefaultTitle, toIdentifier}
import models.project.member.ProjectMember.InputType

object TableExportModel {
  def loadTableModel(t: Table, tables: Seq[Table], enums: Seq[ExportEnum]) = {
    val audited = t.name match {
      case "system_users" => true
      case _ => false
    }

    val cn = t.name match {
      case "system_users" => "SystemUser"
      case "oauth2_info" => "OAuth2Info"
      case x => toClassName(x)
    }

    val provided = cn match {
      case "Ddl" | "LoginInfo" | "OAuth2Info" | "PasswordInfo" | "SettingValues" => true
      case _ => false
    }

    val pkg = cn match {
      case "Ddl" => List("ddl")
      case "FlywaySchemaHistory" => List("ddl")
      case "Audit" => List("audit")
      case "AuditRecord" => List("audit")
      case "OAuth2Info" => List("auth")
      case "PasswordInfo" => List("auth")
      case "ScheduledTaskRun" => List("task")
      case "SettingValues" => List("settings")
      case "SyncProgress" => List("sync")
      case "SystemUser" => List("user")
      case "Note" => List("note")
      case "LoginInfo" | "PasswordInfo" => List("auth")
      case _ => Nil
    }

    val title = toDefaultTitle(cn) match {
      case "O Auth2 Info" => "OAuth2 Info"
      case x => x
    }

    val plural = title match {
      case "Sync Progress" => "Sync Progresses"
      case "Flyway Schema History" => "Flyway Schema Histories"
      case x => x + "s"
    }

    ExportModel(
      inputType = InputType.PostgresTable,
      name = t.name,
      pkg = pkg,
      propertyName = toIdentifier(cn),
      className = cn,
      title = title,
      description = t.description,
      plural = plural,
      fields = loadTableFields(t, enums),
      pkColumns = ExportConfigurationHelper.pkColumns(t),
      foreignKeys = t.foreignKeys.groupBy(x => x.references).map(_._2.head).toList,
      references = ExportConfigurationHelper.references(tables, t, Map.empty),
      provided = provided
    )
  }

  private[this] def loadTableFields(t: Table, enums: Seq[ExportEnum]) = t.columns.zipWithIndex.toList.map { col =>
    val banned = t.name match {
      case "audit_record" if col._1.name == "changes" => true
      case _ => false
    }
    val inPk = t.primaryKey.exists(_.columns.contains(col._1.name))
    val idxs = t.indexes.filter(i => i.columns.exists(_.name == col._1.name)).map(i => i.name -> i.unique)
    val inIndex = idxs.nonEmpty
    val unique = idxs.exists(_._2)
    def extras = t.name match {
      case "audit_record" => Set("changes")
      case "note" => Set("rel_type", "rel_pk", "text", "author", "created")
      case "flyway_schema_history" => Set("installed_rank", "version", "description", "type", "installed_on", "success")
      case "sync_progress" => Set("message", "last_time")
      case "scheduled_task_run" => Set("arguments")
      case _ => Set.empty[String]
    }
    val inSearch = (!banned) && (inPk || inIndex || extras(col._1.name))
    ExportConfigurationDefault.loadField(col._1, col._2, inIndex, unique, inSearch, enums)
  }
}
