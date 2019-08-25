Index.PACKAGES = {"com.kyleu.projectile.util" : [{"name" : "com.kyleu.projectile.util.EncryptionUtils", "shortDescription" : "Uses a user-provided secret to encrypt and decrypt arbitrary bytes and strings using AES\/ECB\/PKCS5Padding", "object" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html", "members_object" : [{"label" : "decryptBytes", "tail" : "(encryptedValue: String, throwOnError: Boolean): Array[Byte]", "member" : "com.kyleu.projectile.util.EncryptionUtils.decryptBytes", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#decryptBytes(encryptedValue:String,throwOnError:Boolean):Array[Byte]", "kind" : "def"}, {"label" : "decrypt", "tail" : "(encryptedValue: String, throwOnError: Boolean): String", "member" : "com.kyleu.projectile.util.EncryptionUtils.decrypt", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#decrypt(encryptedValue:String,throwOnError:Boolean):String", "kind" : "def"}, {"label" : "encryptBytes", "tail" : "(value: Array[Byte]): String", "member" : "com.kyleu.projectile.util.EncryptionUtils.encryptBytes", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#encryptBytes(value:Array[Byte]):String", "kind" : "def"}, {"label" : "encrypt", "tail" : "(value: String): String", "member" : "com.kyleu.projectile.util.EncryptionUtils.encrypt", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#encrypt(value:String):String", "kind" : "def"}, {"label" : "setKey", "tail" : "(k: String): Unit", "member" : "com.kyleu.projectile.util.EncryptionUtils.setKey", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#setKey(k:String):Unit", "kind" : "def"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.equals", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#equals(x$1:Object):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "com\/kyleu\/projectile\/util\/EncryptionUtils$.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "kind" : "object"}, {"name" : "com.kyleu.projectile.util.JsonIncludeParser", "shortDescription" : "A JSON parser that supports comments and included external files", "members_class" : [{"label" : "modify", "tail" : "(path: String, fn: String, json: Json): Json", "member" : "com.kyleu.projectile.util.JsonIncludeParser.modify", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#modify(path:String,fn:String,json:io.circe.Json):io.circe.Json", "kind" : "def"}, {"label" : "parseWithIncludes", "tail" : "(key: String): Json", "member" : "com.kyleu.projectile.util.JsonIncludeParser.parseWithIncludes", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#parseWithIncludes(key:String):io.circe.Json", "kind" : "def"}, {"member" : "com.kyleu.projectile.util.JsonIncludeParser#<init>", "error" : "unsupported entity"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.equals", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#equals(x$1:Object):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "class" : "com\/kyleu\/projectile\/util\/JsonIncludeParser.html", "kind" : "class"}, {"name" : "com.kyleu.projectile.util.Logging", "object" : "com\/kyleu\/projectile\/util\/Logging$.html", "members_object" : [{"label" : "TraceLogger", "tail" : "", "member" : "com.kyleu.projectile.util.Logging.TraceLogger", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#TraceLoggerextendsProductwithSerializable", "kind" : "final case class"}, {"label" : "metricsId", "tail" : ": String", "member" : "com.kyleu.projectile.util.Logging.metricsId", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#metricsId:String", "kind" : "val"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "com\/kyleu\/projectile\/util\/Logging$.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.equals", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#equals(x$1:Object):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "com\/kyleu\/projectile\/util\/Logging$.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "trait" : "com\/kyleu\/projectile\/util\/Logging.html", "kind" : "object", "members_trait" : [{"label" : "log", "tail" : ": TraceLogger", "member" : "com.kyleu.projectile.util.Logging.log", "link" : "com\/kyleu\/projectile\/util\/Logging.html#log:com.kyleu.projectile.util.Logging.TraceLogger", "kind" : "lazy val"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "com\/kyleu\/projectile\/util\/Logging.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "com\/kyleu\/projectile\/util\/Logging.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "com\/kyleu\/projectile\/util\/Logging.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "com\/kyleu\/projectile\/util\/Logging.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "com\/kyleu\/projectile\/util\/Logging.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "com\/kyleu\/projectile\/util\/Logging.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "com\/kyleu\/projectile\/util\/Logging.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/Logging.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/Logging.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/Logging.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "com\/kyleu\/projectile\/util\/Logging.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "com\/kyleu\/projectile\/util\/Logging.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "com\/kyleu\/projectile\/util\/Logging.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "com\/kyleu\/projectile\/util\/Logging.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.equals", "link" : "com\/kyleu\/projectile\/util\/Logging.html#equals(x$1:Object):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "com\/kyleu\/projectile\/util\/Logging.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "com\/kyleu\/projectile\/util\/Logging.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "com\/kyleu\/projectile\/util\/Logging.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "com\/kyleu\/projectile\/util\/Logging.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "shortDescription" : "Provides a logging interface that accepts TraceData in its methods and includes the trace ids in its output"}], "com.kyleu.projectile" : [], "com.kyleu.projectile.util.tracing" : [{"name" : "com.kyleu.projectile.util.tracing.TraceData", "shortDescription" : "Use noop when you don't have access to an implicit TraceData", "object" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html", "members_class" : [{"label" : "spanId", "tail" : "(): String", "member" : "com.kyleu.projectile.util.tracing.TraceData.spanId", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#spanId:String", "kind" : "def"}, {"label" : "traceId", "tail" : "(): String", "member" : "com.kyleu.projectile.util.tracing.TraceData.traceId", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#traceId:String", "kind" : "def"}, {"label" : "logClass", "tail" : "(cls: Class[_]): Unit", "member" : "com.kyleu.projectile.util.tracing.TraceData.logClass", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#logClass(cls:Class[_]):Unit", "kind" : "def"}, {"label" : "annotate", "tail" : "(v: String): Unit", "member" : "com.kyleu.projectile.util.tracing.TraceData.annotate", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#annotate(v:String):Unit", "kind" : "def"}, {"label" : "tag", "tail" : "(k: String, v: String): Unit", "member" : "com.kyleu.projectile.util.tracing.TraceData.tag", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#tag(k:String,v:String):Unit", "kind" : "def"}, {"label" : "isNoop", "tail" : "(): Boolean", "member" : "com.kyleu.projectile.util.tracing.TraceData.isNoop", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#isNoop:Boolean", "kind" : "def"}, {"member" : "com.kyleu.projectile.util.tracing.TraceData#<init>", "error" : "unsupported entity"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.equals", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#equals(x$1:Object):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "members_object" : [{"label" : "noop", "tail" : ": TraceData", "member" : "com.kyleu.projectile.util.tracing.TraceData.noop", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#noop:com.kyleu.projectile.util.tracing.TraceData", "kind" : "val"}, {"label" : "todo", "tail" : ": TraceData", "member" : "com.kyleu.projectile.util.tracing.TraceData.todo", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#todo:com.kyleu.projectile.util.tracing.TraceData", "kind" : "val"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.equals", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#equals(x$1:Object):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "com\/kyleu\/projectile\/util\/tracing\/TraceData$.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "class" : "com\/kyleu\/projectile\/util\/tracing\/TraceData.html", "kind" : "object"}, {"name" : "com.kyleu.projectile.util.tracing.TracingService", "object" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html", "members_object" : [{"label" : "noop", "tail" : ": TracingService", "member" : "com.kyleu.projectile.util.tracing.TracingService.noop", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#noop:com.kyleu.projectile.util.tracing.TracingService", "kind" : "val"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.equals", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#equals(x$1:Object):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService$.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "trait" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html", "kind" : "object", "members_trait" : [{"label" : "noopTrace", "tail" : "(name: String)(f: (TraceData) => Future[A]): Future[A]", "member" : "com.kyleu.projectile.util.tracing.TracingService.noopTrace", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#noopTrace[A](name:String)(f:com.kyleu.projectile.util.tracing.TraceData=>scala.concurrent.Future[A]):scala.concurrent.Future[A]", "kind" : "def"}, {"label" : "log", "tail" : ": TraceLogger", "member" : "com.kyleu.projectile.util.Logging.log", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#log:com.kyleu.projectile.util.Logging.TraceLogger", "kind" : "lazy val"}, {"label" : "synchronized", "tail" : "(arg0: => T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.equals", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#equals(x$1:Object):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_ <: AnyRef]", "member" : "scala.AnyRef.getClass", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}, {"label" : "close", "tail" : "(): Unit", "member" : "com.kyleu.projectile.util.tracing.TracingService.close", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#close():Unit", "kind" : "abstract def"}, {"label" : "traceBlocking", "tail" : "(traceName: String, tags: (String, String)*)(f: (TraceData) => A)(parentData: TraceData): A", "member" : "com.kyleu.projectile.util.tracing.TracingService.traceBlocking", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#traceBlocking[A](traceName:String,tags:(String,String)*)(f:com.kyleu.projectile.util.tracing.TraceData=>A)(implicitparentData:com.kyleu.projectile.util.tracing.TraceData):A", "kind" : "abstract def"}, {"label" : "trace", "tail" : "(traceName: String, tags: (String, String)*)(f: (TraceData) => Future[A])(parentData: TraceData): Future[A]", "member" : "com.kyleu.projectile.util.tracing.TracingService.trace", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#trace[A](traceName:String,tags:(String,String)*)(f:com.kyleu.projectile.util.tracing.TraceData=>scala.concurrent.Future[A])(implicitparentData:com.kyleu.projectile.util.tracing.TraceData):scala.concurrent.Future[A]", "kind" : "abstract def"}, {"label" : "topLevelTraceBlocking", "tail" : "(name: String)(f: (TraceData) => A): A", "member" : "com.kyleu.projectile.util.tracing.TracingService.topLevelTraceBlocking", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#topLevelTraceBlocking[A](name:String)(f:com.kyleu.projectile.util.tracing.TraceData=>A):A", "kind" : "abstract def"}, {"label" : "topLevelTrace", "tail" : "(name: String)(f: (TraceData) => Future[A]): Future[A]", "member" : "com.kyleu.projectile.util.tracing.TracingService.topLevelTrace", "link" : "com\/kyleu\/projectile\/util\/tracing\/TracingService.html#topLevelTrace[A](name:String)(f:com.kyleu.projectile.util.tracing.TraceData=>scala.concurrent.Future[A]):scala.concurrent.Future[A]", "kind" : "abstract def"}], "shortDescription" : ""}], "com.kyleu" : [], "com" : []};