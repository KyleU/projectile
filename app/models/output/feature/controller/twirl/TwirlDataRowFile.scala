package models.output.feature.controller.twirl

import models.database.schema.ColumnType
import models.export.ExportModel
import models.export.config.ExportConfiguration
import models.output.file.TwirlFile

object TwirlDataRowFile {
  def export(config: ExportConfiguration, model: ExportModel) = {
    val file = TwirlFile(config.applicationPackage ++ model.viewPackage, model.propertyName + "DataRow")
    file.add(s"@(model: ${model.fullClassPath(config)})<tr>", 1)
    model.searchFields.foreach { c =>
      val href = model.pkFields match {
        case Nil => ""
        case fields =>
          val args = fields.map(f => s"model.${f.propertyName}").mkString(", ")
          s"""@${TwirlHelper.routesClass(config, model)}.view($args)"""
      }
      if (model.pkFields.exists(pkField => pkField.propertyName == c.propertyName)) {
        file.add(s"""<td><a href="$href" class="theme-text">@model.${c.propertyName}</a></td>""")
      } else {
        model.foreignKeys.find(_.references.forall(_.source == c.key)) match {
          case Some(fk) if config.getModelOpt(fk.targetTable).isDefined =>
            file.add("<td>", 1)
            val tgt = config.getModel(fk.targetTable)
            if (!tgt.pkFields.forall(f => fk.references.map(_.target).contains(f.key))) {
              throw new IllegalStateException(s"FK [$fk] does not match PK [${tgt.pkFields.map(_.key).mkString(", ")}]...")
            }

            file.add(s"@model.${c.propertyName}")
            if (c.notNull) {
              file.add(s"""<a class="theme-text" href="@${TwirlHelper.routesClass(config, tgt)}.view(model.${c.propertyName})">""", 1)
              file.add(TwirlHelper.iconHtml(config, tgt.propertyName))
              file.add("</a>", -1)
            } else {
              file.add(s"@model.${c.propertyName}.map { v =>", 1)
              file.add(s"""<a class="theme-text" href="@${TwirlHelper.routesClass(config, tgt)}.view(v)">""", 1)
              file.add(TwirlHelper.iconHtml(config, tgt.propertyName))
              file.add("</a>", -1)
              file.add("}", -1)
            }
            file.add("</td>", -1)
          case _ if c.t == ColumnType.CodeType => file.add(s"<td><pre>@model.${c.propertyName}</pre></td>")
          case _ => file.add(s"<td>@model.${c.propertyName}</td>")
        }
      }
    }
    file.add("</tr>", -1)
    file
  }
}
