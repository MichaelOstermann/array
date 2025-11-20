import type { ArrayGuard, ArrayPredicate, NonNil, OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.findOrElse(array, predicate, callback)`
 *
 * Returns the first element in `array` that satisfies the provided `predicate` function, or the result of calling `callback` with the array if no element is found.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.findOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findOrElse(
 *         (x) => x > 10,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 */
export const findOrElse: {
    <T, U extends T, V>(predicate: ArrayGuard<T, U>, orElse: OrElse<Exclude<T, U>, V>): (target: readonly T[]) => NonNil<U> | V
    <T, V>(predicate: ArrayPredicate<T>, orElse: OrElse<T, V>): (target: readonly T[]) => NonNil<T> | V
    <T, U extends T, V>(target: readonly T[], predicate: ArrayGuard<T, U>, orElse: OrElse<Exclude<T, U>, V>): NonNil<U> | V
    <T, V>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, V>): NonNil<T> | V
} = dfdlT(<T, V>(target: readonly T[], predicate: ArrayPredicate<T>, orElse: OrElse<T, V>): any => {
    return target.find(predicate) ?? orElse(target)
}, 3)
