import type { ArrayPredicate, OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # findLastIndexOrElse
 *
 * ```ts
 * function Array.findLastIndexOrElse(
 *     array: T[],
 *     predicate: (value: T, index: number, array: T[]) => boolean,
 *     fallback: (array: T[]) => U
 * ): number | U
 * ```
 *
 * Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, calls `orElse` with the original array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findLastIndexOrElse(
 *     [1, 3, 2, 4],
 *     (x) => x > 2,
 *     () => -1,
 * ); // 3
 *
 * Array.findLastIndexOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 5,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 3, 2, 4],
 *     Array.findLastIndexOrElse(
 *         (x) => x > 2,
 *         () => -1,
 *     ),
 * ); // 3
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findLastIndexOrElse(
 *         (x) => x > 5,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 *
 */
export const findLastIndexOrElse: {
    <T, U>(predicate: ArrayPredicate<T>, orElse: OrElse<T, U>): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, U>): number | U
} = dfdlT(<T, U>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, U>): number | U => {
    const idx = target.findLastIndex(predicate)
    return idx < 0 ? orElse(target) : idx
}, 3)
