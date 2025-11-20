import type { NonNil } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { filter } from "./filter"

/**
 * `Array.compact(array)`
 *
 * Removes all nullable values from `array`.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.compact([1, null, undefined]); // [1]
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, null, undefined], Array.compact()); // [1]
 * ```
 */
export const compact: {
    (): <T>(target: T[]) => NonNil<T>[]
    (): <T>(target: readonly T[]) => readonly NonNil<T>[]

    <T>(target: T[]): NonNil<T>[]
    <T>(target: readonly T[]): readonly NonNil<T>[]
} = dfdlT(<T>(target: T[]): any => {
    return filter(target, v => v != null)
}, 1)
