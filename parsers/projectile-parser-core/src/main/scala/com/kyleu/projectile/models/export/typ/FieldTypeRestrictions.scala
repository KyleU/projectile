package com.kyleu.projectile.models.export.typ

import com.kyleu.projectile.models.export.typ.FieldType._

object FieldTypeRestrictions {
  def isDate(t: FieldType) = t match {
    case DateType | TimeType | TimestampType | TimestampZonedType => true
    case _ => false
  }

  def isNumeric(t: FieldType) = t match {
    case ShortType | IntegerType | LongType | SerialType | FloatType | DoubleType | BigDecimalType => true
    case _ => false
  }
}
