package com.kyleu.projectile.controllers.sitemap

import com.kyleu.projectile.controllers.AuthController
import com.kyleu.projectile.models.menu.{NavMenu, SystemMenu}
import com.kyleu.projectile.models.module.{Application, ApplicationFeature}
import com.kyleu.projectile.models.web.InternalIcons

import scala.concurrent.{ExecutionContext, Future}

@javax.inject.Singleton
class SitemapController @javax.inject.Inject() (override val app: Application)(implicit ec: ExecutionContext) extends AuthController("sitemap") {
  ApplicationFeature.enable(ApplicationFeature.Sitemap)
  SystemMenu.addToolMenu("sitemap", "Sitemap", Some("The sitemap of this application"), routes.SitemapController.sitemap(), InternalIcons.sitemap)

  def sitemap() = menu("")

  def menu(path: String) = withoutSession("testbed") { implicit request => implicit td =>
    val segments = path.split('/').map(_.trim).filter(_.nonEmpty)
    val cfg = app.cfg(request.identity, segments.toIndexedSeq: _*)
    val root = NavMenu(key = "_root", title = cfg.projectName, description = Some("The home page of this application"), url = Some("/"), children = cfg.menu)
    val result = segments.foldLeft((Seq.empty[String], root)) { (l, r) =>
      l._2.children.find(_.key == r) match {
        case Some(item) => (l._1 :+ r, item)
        case None => throw new IllegalStateException(s"Cannot load menu with path [$path], possible permissions problem")
      }
    }

    Future.successful(render {
      case Accepts.Html() => Ok(com.kyleu.projectile.views.html.sitemap.sitemap(cfg, result._1, result._2))
      case Accepts.Json() => Ok(com.kyleu.projectile.util.JsonSerializers.encoderOps(result._2).asJson)
    })
  }
}
