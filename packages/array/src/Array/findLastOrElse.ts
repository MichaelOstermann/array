import type { ArrayGuard, ArrayPredicate, NonNil, OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # findLastOrElse
 *
 * ```ts
 * function Array.findLastOrElse(
 *     array: T[],
 *     predicate: (value: T, index: number, array: T[]) => boolean,
 *     fallback: (array: T[]) => U
 * ): T | U
 * ```
 *
 * Returns the last element in `array` that satisfies the provided `predicate` function, or the result of calling `callback` with the array if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findLastOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findLastOrElse(
 *         (x) => x > 10,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 *
 */
export const findLastOrElse: {
    <T, U extends T, V>(predicate: ArrayGuard<T, U>, orElse: OrElse<Exclude<T, U>, V>): (target: readonly T[]) => NonNil<U> | V
    <T, V>(predicate: ArrayPredicate<T>, orElse: OrElse<T, V>): (target: readonly T[]) => NonNil<T> | V
    <T, U extends T, V>(target: readonly T[], predicate: ArrayGuard<T, U>, orElse: OrElse<Exclude<T, U>, V>): NonNil<U> | V
    <T, V>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, V>): NonNil<T> | V
} = dfdlT(<T, V>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, V>): any => {
    return target.findLast(predicate) ?? orElse(target)
}, 3)
