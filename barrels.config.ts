import { defineConfig } from "@monstermann/barrels"
import { flat } from "@monstermann/barrels-flat"
import { namespace } from "@monstermann/barrels-namespace"

export default defineConfig([
    namespace({
        entries: "./packages/array/src/Array",
    }),
    flat({
        entries: "./packages/array/src",
        include: ["*", "Array/index.js"],
    }),
])
