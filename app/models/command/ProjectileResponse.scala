package models.command

import enumeratum.{Enum, EnumEntry}
import io.circe.Json
import models.input.{Input, InputSummary}
import models.project.{Project, ProjectSummary}

sealed trait ProjectileResponse extends EnumEntry

object ProjectileResponse extends Enum[ProjectileResponse] {
  case object OK extends ProjectileResponse
  case class Error(msg: String) extends ProjectileResponse
  case class JsonResponse(json: Json) extends ProjectileResponse

  case class ProjectList(projects: Seq[ProjectSummary]) extends ProjectileResponse
  case class ProjectDetail(project: Project) extends ProjectileResponse

  case class InputList(inputs: Seq[InputSummary]) extends ProjectileResponse
  case class InputDetail(input: Input) extends ProjectileResponse

  override val values = findValues
}