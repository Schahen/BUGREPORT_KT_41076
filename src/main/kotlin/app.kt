
interface MyLogic {
    fun String.foo(s: String = ""): String
}

class MyLogicImpl : MyLogic {
    override fun String.foo(s: String): String = this + s
}
