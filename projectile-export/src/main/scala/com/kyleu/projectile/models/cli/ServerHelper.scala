package com.kyleu.projectile.models.cli

import com.kyleu.projectile.models.command.ProjectileCommand.{ServerStart, ServerStop}
import com.kyleu.projectile.models.command.{ProjectileCommand, ProjectileResponse}
import com.kyleu.projectile.util.NullUtils

object ServerHelper {
  lazy val inst = try {
    Some(getClass.getClassLoader.loadClass("com.kyleu.projectile.web.util.PlayServerHelper$").getField("MODULE$").get(
      NullUtils.inst
    ).asInstanceOf[ServerHelper])
  } catch {
    case x: ClassNotFoundException => None
  }

  val sbtError = "The server code can't be run from sbt. To run the server, use the GitHub release or run [homebrew install kyleu/kyleu/projectile]."
}

trait ServerHelper {
  protected val processServer: PartialFunction[ProjectileCommand, ProjectileResponse] = {
    case ServerStart(port) => startServer(port)
    case ServerStop => stopServer()
  }

  def startServer(port: Int): ProjectileResponse

  def stopServer(): ProjectileResponse
}
