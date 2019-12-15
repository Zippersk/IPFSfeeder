import block3210 from "./demoData/603210"
import block3211 from "./demoData/603211"
import block3212 from "./demoData/603212"
import block3213 from "./demoData/603213"

export default abstract class BlockBookApi {
    public static GetBlocks() {
        return [
            block3210,
            block3211,
            block3212,
            block3213
        ]
    }
}
