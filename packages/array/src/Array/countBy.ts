import type { ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # countBy
 *
 * ```ts
 * function Array.countBy(
 *     array: T[],
 *     predicate: (value: T, index: number, array: T[]) => boolean
 * ): number
 * ```
 *
 * Counts the number of elements in the `target` array satisfy the provided `predicate` function.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * const isEven = (n) => n % 2 === 0;
 * Array.countBy([1, 2, 3, 4, 5], isEven); // 2
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * const isEven = (n) => n % 2 === 0;
 * pipe([1, 2, 3, 4, 5], Array.countBy(isEven)); // 2
 * ```
 *
 */
export const countBy: {
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): number
} = dfdlT(<T>(target: readonly T[], predicate: ArrayPredicate<T>): number => {
    return target.reduce((acc, value, idx, target) => acc + (predicate(value, idx, target) ? 1 : 0), 0)
}, 2)
