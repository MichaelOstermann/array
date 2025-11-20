import type { ArrayPredicate, OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `Array.findReplaceLastOrElse(array, predicate, replacement, callback)`
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or the result of calling `callback` with the array if no element is found.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.findReplaceLastOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     99,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findReplaceLastOrElse(
 *         (x) => x > 10,
 *         99,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 */
export const findReplaceLastOrElse: {
    <T, U>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): (target: T[]) => T[] | U
    <T, U>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): T[] | U
    <T, U>(target: readonly T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): readonly T[] | U
} = dfdlT(<T, U>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): T[] | U => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) return orElse(target)
    const prev = target[idx]! as T
    if (prev === replacement) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 4)
