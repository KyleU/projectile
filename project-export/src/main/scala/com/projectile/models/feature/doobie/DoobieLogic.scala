package com.projectile.models.feature.doobie

import com.projectile.models.export.config.ExportConfiguration
import com.projectile.models.feature.{EnumFeature, FeatureLogic, ModelFeature}

object DoobieLogic extends FeatureLogic {
  override def export(config: ExportConfiguration, info: String => Unit, debug: String => Unit) = {
    val models = config.models.filter(_.features(ModelFeature.Doobie)).flatMap { model =>
      Seq(DoobieFile.export(config, model).rendered, DoobieTestsFile.export(config, model).rendered)
    }

    val enums = config.enums.filter(_.features(EnumFeature.Doobie)).flatMap { enum =>
      Seq(EnumDoobieFile.export(config, enum).rendered)
    }

    debug(s"Exported [${models.size}] models and [${enums.size}] enums")
    models ++ enums
  }
}