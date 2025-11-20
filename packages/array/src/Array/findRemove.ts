import type { ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `Array.findRemove(array, predicate)`
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.findRemove([1, 2, 3, 4], (x) => x > 2); // [1, 2, 4]
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findRemove((x) => x > 2),
 * ); // [1, 2, 4]
 * ```
 */
export const findRemove: {
    <T>(predicate: ArrayPredicate<T>): (target: T[]) => T[]
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], predicate: ArrayPredicate<T>): T[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): readonly T[]
} = dfdlT(<T>(target: T[], predicate: ArrayPredicate<T>): T[] => {
    const idx = target.findIndex(predicate)
    if (idx === -1) return target
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 2)
