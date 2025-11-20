import type { ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `Array.findReplaceLastOr(array, predicate, replacement, fallback)`
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or `fallback` if no element is found.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.findReplaceLastOr([1, 2, 3, 4], (x) => x > 10, 99, []); // []
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findReplaceLastOr((x) => x > 10, 99, []),
 * ); // []
 * ```
 */
export const findReplaceLastOr: {
    <T, U>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>, or: U): (target: T[]) => T[] | U
    <T, U>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>, or: U): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>, or: U): T[] | U
    <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>, or: U): readonly T[] | U
} = dfdlT(<T, U>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>, or: U): T[] | U => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) return or
    const prev = target[idx]! as T
    if (prev === replacement) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 4)
