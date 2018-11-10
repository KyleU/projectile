package models.output.feature.controller

import models.export.config.ExportConfiguration
import models.output.feature.FeatureLogic
import models.output.{ExportHelper, OutputPath}

object InjectRoutes extends FeatureLogic.Inject(path = OutputPath.ServerResource, filename = "routes") {
  val startString = "# Start model route files"
  val endString = "# End model route files"

  override def dir(config: ExportConfiguration) = Nil

  override def logic(config: ExportConfiguration, markers: Map[String, Seq[String]], original: String) = {
    val packages = config.packages.map(_._1)

    def routeFor(pkg: String) = {
      val detailUrl = s"/admin/$pkg"
      val detailWs = (0 until (39 - detailUrl.length)).map(_ => " ").mkString
      s"->          $detailUrl $detailWs $pkg.Routes"
    }

    val newContent = packages.map(routeFor).mkString("\n")
    ExportHelper.replaceBetween(filename = filename, original = original, start = startString, end = endString, newContent = newContent)
  }
}
