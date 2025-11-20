import type { ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.findLastIndexOr(target, predicate, or)`
 *
 * Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, returns `or`.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.findLastIndexOr([1, 3, 2, 4], (x) => x > 2, -1); // 3
 * Array.findLastIndexOr([1, 2, 3, 4], (x) => x > 5, -1); // -1
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 3, 2, 4],
 *     Array.findLastIndexOr((x) => x > 2, -1),
 * ); // 3
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findLastIndexOr((x) => x > 5, -1),
 * ); // -1
 * ```
 */
export const findLastIndexOr: {
    <T, U>(predicate: ArrayPredicate<T>, or: U): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, or: U): number | U
} = dfdlT(<T, U>(target: readonly T[], predicate: ArrayPredicate<T>, or: U): number | U => {
    const idx = target.findLastIndex(predicate)
    return idx < 0 ? or : idx
}, 3)
