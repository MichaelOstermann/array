import type { ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # findLastIndexOrThrow
 *
 * ```ts
 * function Array.findLastIndexOrThrow(
 *     array: T[],
 *     predicate: (value: T, index: number, array: T[]) => boolean
 * ): number
 * ```
 *
 * Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findLastIndexOrThrow([1, 3, 2, 4], (x) => x > 2); // 3
 * Array.findLastIndexOrThrow([1, 2, 3, 4], (x) => x > 5); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 3, 2, 4],
 *     Array.findLastIndexOrThrow((x) => x > 2),
 * ); // 3
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findLastIndexOrThrow((x) => x > 5),
 * ); // throws FnError
 * ```
 *
 */
export const findLastIndexOrThrow: {
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): number
} = dfdlT(<T>(target: readonly T[], predicate: ArrayPredicate<T>): number => {
    const idx = target.findLastIndex(predicate)
    if (idx < 0) throw new Error("Array.findLastIndexOrThrow: No value found.")
    return idx
}, 2)
