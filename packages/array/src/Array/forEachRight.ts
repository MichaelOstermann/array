import type { ArrayMap } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.forEachRight(array, callback)`
 *
 * Executes the provided `callback` function once for each element in `array` in reverse order and returns the original array.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.forEachRight([1, 2, 3], (x) => console.log(x)); // [1, 2, 3]
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3],
 *     Array.forEachRight((x) => console.log(x)),
 * ); // [1, 2, 3]
 * ```
 */
export const forEachRight: {
    <T>(callback: ArrayMap<T, any>): (target: T[]) => T[]
    <T>(callback: ArrayMap<T, any>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], callback: ArrayMap<T, any>): T[]
    <T>(target: readonly T[], callback: ArrayMap<T, any>): readonly T[]
} = dfdlT(<T>(target: T[], callback: ArrayMap<T, any>): T[] => {
    let i = target.length
    while (i--) callback(target[i]!, i, target)
    return target
}, 2)
