scalacOptions ++= Seq("-unchecked", "-deprecation")
evictionWarningOptions in update := EvictionWarningOptions.default.withWarnTransitiveEvictions(false)

// Web
addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.8.2")
addSbtPlugin("com.typesafe.sbt" % "sbt-twirl" % "1.5.0")
addSbtPlugin("com.typesafe.sbt" % "sbt-web" % "1.4.4")
addSbtPlugin("com.typesafe.sbt" % "sbt-gzip" % "1.0.2")
addSbtPlugin("org.irundaia.sbt" % "sbt-sassify" % "1.5.1")

// Scala.js
addSbtPlugin("org.portable-scala" % "sbt-scalajs-crossproject" % "0.6.1")
addSbtPlugin("org.scala-js" % "sbt-scalajs" % "0.6.33")
addSbtPlugin("com.vmunier" % "sbt-web-scalajs" % "1.0.9-0.6" exclude("org.scala-js", "sbt-scalajs"))

// Source Control
addSbtPlugin("com.typesafe.sbt" % "sbt-git" % "1.0.0")

// App Packaging
addSbtPlugin("com.typesafe.sbt" % "sbt-native-packager" % "1.7.3")
addSbtPlugin("com.eed3si9n" % "sbt-assembly" % "0.15.0")

// Publishing
addSbtPlugin("org.xerial.sbt" % "sbt-sonatype" % "3.8")

// Dependency Resolution
addSbtPlugin("io.get-coursier" % "sbt-coursier" % "1.0.0")

// Code Quality
addSbtPlugin("org.scalastyle" %% "scalastyle-sbt-plugin" % "1.0.0") // scalastyle
addSbtPlugin("org.scalariform" % "sbt-scalariform" % "1.8.1") // scalariformFormat
addSbtPlugin("org.wartremover" % "sbt-wartremover" % "2.4.9")

// Documentation
addSbtPlugin("com.lightbend.paradox" % "sbt-paradox" % "0.6.4")
addSbtPlugin("io.github.jonas" % "sbt-paradox-material-theme" % "0.6.0")
addSbtPlugin("com.typesafe.sbt" % "sbt-site" % "1.3.3" exclude("com.lightbend.paradox", "sbt-paradox"))
addSbtPlugin("com.typesafe.sbt" % "sbt-ghpages" % "0.6.3")
