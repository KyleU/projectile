package com.kyleu.projectile.util.web

import javax.inject.Inject
import play.api.http.HttpFilters

class WebFilters @Inject() (tracing: TracingFilter, logging: LoggingFilter) extends HttpFilters {
  override def filters = Seq(tracing, logging)
}
