import type { ArrayGuard, ArrayPredicate, NonNil } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.findLastOr(array, predicate, fallback)`
 *
 * Returns the last element in `array` that satisfies the provided `predicate` function, or `fallback` if no element is found.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.findLastOr([1, 2, 3, 4], (x) => x > 10, 0); // 0
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findLastOr((x) => x > 10, 0),
 * ); // 0
 * ```
 */
export const findLastOr: {
    <T, U extends T, V>(predicate: ArrayGuard<T, U>, or: V): (target: readonly T[]) => NonNil<U> | V
    <T, V>(predicate: ArrayPredicate<T>, or: V): (target: readonly T[]) => NonNil<T> | V
    <T, U extends T, V>(target: readonly T[], predicate: ArrayGuard<T, U>, or: V): NonNil<U> | V
    <T, V>(target: readonly T[], predicate: ArrayPredicate<T>, or: V): NonNil<T> | V
} = dfdlT(<T, U extends T, V>(target: readonly T[], predicate: ArrayGuard<T, U>, or: V): any => {
    return target.findLast(predicate) ?? or
}, 3)
