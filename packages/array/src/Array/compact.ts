import type { NonNil } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { filter } from "./filter"

/**
 * # compact
 *
 * ```ts
 * function Array.compact(array: T[]): T[]
 * ```
 *
 * Removes all nullable values from `array`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.compact([1, null, undefined]); // [1]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, null, undefined], Array.compact()); // [1]
 * ```
 *
 */
export const compact: {
    (): <T>(target: T[]) => NonNil<T>[]
    (): <T>(target: readonly T[]) => readonly NonNil<T>[]

    <T>(target: T[]): NonNil<T>[]
    <T>(target: readonly T[]): readonly NonNil<T>[]
} = dfdlT(<T>(target: T[]): any => {
    return filter(target, v => v != null)
}, 1)
