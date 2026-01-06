import type { ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # findRemoveLastOr
 *
 * ```ts
 * function Array.findRemoveLastOr(
 *     array: T[],
 *     predicate: (value: T, index: number, array: T[]) => boolean,
 *     fallback: U
 * ): T[] | U
 * ```
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or `fallback` if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findRemoveLastOr([1, 2, 3, 4], (x) => x > 10, []); // []
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findRemoveLastOr((x) => x > 10, []),
 * ); // []
 * ```
 *
 */
export const findRemoveLastOr: {
    <T, U>(predicate: ArrayPredicate<T>, or: U): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, or: U): T[] | U
} = dfdlT(<T, U>(target: readonly T[], predicate: ArrayPredicate<T>, or: U): T[] | U => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) return or
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 3)
