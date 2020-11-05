import kotlin.test.Test

typealias Transform = (String) -> String

external interface Something

class GenericTestsImpl(ping: Something): Something {
    @Test
    fun foo() {
    }
}
