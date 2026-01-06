import type { ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # findIndex
 *
 * ```ts
 * function Array.findIndex(
 *     array: T[],
 *     predicate: (value: T, index: number, array: T[]) => boolean
 * ): number
 * ```
 *
 * Returns the index of the first element in `array` that satisfies the provided `predicate` function, or -1 if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findIndex([1, 2, 3, 4], (x) => x > 2); // 2
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findIndex((x) => x > 2),
 * ); // 2
 * ```
 *
 */
export const findIndex: {
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): number
} = dfdlT(<T>(target: readonly T[], predicate: ArrayPredicate<T>): number => {
    return target.findIndex(predicate)
}, 2)
