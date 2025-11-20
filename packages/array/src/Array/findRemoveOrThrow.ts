import type { ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `Array.findRemoveOrThrow(array, predicate)`
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or throws an error if no element is found.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.findRemoveOrThrow([1, 2, 3, 4], (x) => x > 2); // [1, 2, 4]
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findRemoveOrThrow((x) => x > 2),
 * ); // [1, 2, 4]
 * ```
 */
export const findRemoveOrThrow: {
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): T[]
} = dfdlT(<T>(target: readonly T[], predicate: ArrayPredicate<T>): T[] => {
    const idx = target.findIndex(predicate)
    if (idx === -1) throw new Error("Array.findRemoveOrThrow: Value not found.")
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 2)
