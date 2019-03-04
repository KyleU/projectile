package com.kyleu.projectile.models.typescript.node

import com.kyleu.projectile.models.typescript.node.TypeScriptNode._

object NodeHelper {
  def asString(n: TypeScriptNode): String = n match {
    case node: SourceFile => node.path
    case node: SourceFileReference => "ref(" + node.filename + ")"

    case _: ImportDecl => "-import-"
    case _: ExportDecl => "-export-"
    case node: ExportNamespaceDecl => "export as namespace " + node.name
    case node: InterfaceDecl => "interface " + node.name
    case node: ModuleDecl => "module " + node.name
    case node: ClassDecl => "class " + node.name
    case node: MethodDecl => s"${node.name}(${node.params.map(p => p.k + ": " + p.t).mkString(", ")}): ${node.ret}"
    case node: VariableDecl => "var " + node.name + ": " + node.typ
    case node: TypeAliasDecl => "alias " + node.name + " = " + node.typ
    case node: PropertyDecl => node.name + ": " + node.typ
    case node: EnumDecl => "enum " + node.name

    case _: ModuleBlock => "-module block-"

    case node: Constructor => s"constructor(${node.params.map(p => p.k + ": " + p.t).mkString(", ")})"
    case node: ConstructSig => s"constructor(${node.params.map(p => p.k + ": " + p.t).mkString(", ")}): ${node.typ}"
    case node: IndexSig => s"[${node.params.map(p => p.k + ": " + p.t).mkString(", ")}]: ${node.typ}"
    case node: PropertySig => node.name + ": " + node.typ
    case node: CallSig => s"(${node.params.map(p => p.k + ": " + p.t).mkString(", ")}): ${node.ret}"
    case node: MethodSig => s"${node.name}(${node.params.map(p => p.k + ": " + p.t).mkString(", ")}): ${node.ret}"

    case _: ExportAssignment => "-export-"
    case _: VariableStmt => "-variable-"

    case node: EnumMember => node.name + node.initial.map(" = " + _).getOrElse("")

    case node: LogMessage => "log[" + node.msg + "]"
    case node: Unknown => node.kind
    case node: Error => s"error(${node.kind}: ${node.msg})"
  }

  def getSourceFileNodes(n: TypeScriptNode): Seq[SourceFile] = Seq(n).collect { case s: SourceFile => s } ++ n.children.flatMap(getSourceFileNodes)
  def getUnknownNodes(n: TypeScriptNode): Seq[Unknown] = Seq(n).collect { case u: Unknown => u } ++ n.children.flatMap(getUnknownNodes)
  def getErrorNodes(n: TypeScriptNode): Seq[Error] = Seq(n).collect { case e: Error => e } ++ n.children.flatMap(getErrorNodes)
}