package com.kyleu.projectile.services.database.schema

import java.sql.DatabaseMetaData

import com.kyleu.projectile.models.database.schema.{Column, EnumType}
import com.kyleu.projectile.services.database.query.{JdbcHelper, JdbcRow, QueryTranslations}
import com.kyleu.projectile.util.NullUtils
import com.kyleu.projectile.util.tracing.TraceData

import scala.util.control.NonFatal

object MetadataColumns {
  def getAllColumns(metadata: DatabaseMetaData, catalog: Option[String], schema: Option[String], enums: Seq[EnumType]) = {
    val rs = metadata.getColumns(catalog.orNull, schema.orNull, NullUtils.inst, NullUtils.inst)
    val columns = new JdbcRow.Iter(rs).map { row =>
      row.as[String]("TABLE_NAME") -> fromRow(row, enums)
    }.toList
    columns.sortBy(_._1).map(_._2)
  }

  def getColumns(metadata: DatabaseMetaData, catalog: Option[String], schema: Option[String], name: String, enums: Seq[EnumType]) = {
    val rs = metadata.getColumns(catalog.orNull, schema.orNull, name, NullUtils.inst)
    val columns = new JdbcRow.Iter(rs).map(row => fromRow(row, enums)).toList
    columns.sortBy(_._1).map(_._2)
  }

  private[this] def fromRow(row: JdbcRow, enums: Seq[EnumType]) = {
    val nullable = JdbcHelper.intVal(row.as[Any]("NULLABLE"))
    val colType = JdbcHelper.intVal(row.as[Any]("DATA_TYPE"))
    val colTypeName = row.asOpt[Any]("TYPE_NAME").map(x => JdbcHelper.stringVal(x)).getOrElse("")
    val colSize = row.asOpt[Any]("COLUMN_SIZE").map(JdbcHelper.intVal)
    val position = JdbcHelper.intVal(row.as[Any]("ORDINAL_POSITION"))
    val t = QueryTranslations.forType(colType, colTypeName, colSize, enums)(TraceData.noop)
    position -> Column(
      name = row.as[String]("COLUMN_NAME"),
      description = row.asOpt[String]("REMARKS"),
      definition = row.asOpt[String]("COLUMN_DEF"),
      notNull = nullable == 0, // IS_NULLABLE?
      autoIncrement = try {
        row.asOpt[String]("IS_AUTOINCREMENT").contains("YES")
      } catch {
        case NonFatal(_) => false
      },
      columnType = t,
      sqlTypeCode = colType,
      sqlTypeName = colTypeName,
      size = colSize.map(_.toString).getOrElse("?"),
      sizeAsInt = colSize.getOrElse(0), // ?
      scale = 0, // BUFFER_LENGTH? DECIMAL_DIGITS? NUM_PREC_RADIX?
      defaultValue = row.asOpt[String]("COLUMN_DEF")
    )
  }
}
