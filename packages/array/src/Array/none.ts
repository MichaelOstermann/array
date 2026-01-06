import type { ArrayGuard, ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # none
 *
 * ```ts
 * function Array.none(
 *     array: T[],
 *     predicate: (value: T, index: number, array: T[]) => boolean
 * ): boolean
 * ```
 *
 * Returns `true` if no elements in `array` satisfy the provided `predicate` function, otherwise returns `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.none([1, 2, 3, 4], (x) => x > 10); // true
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.none((x) => x > 10),
 * ); // true
 * ```
 *
 */
export const none: {
    <T, U extends T>(predicate: ArrayGuard<T, U>): (target: readonly T[]) => target is Exclude<T, U>[]
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => boolean
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): target is Exclude<T, U>[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): boolean
} = dfdlT(<T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): target is Exclude<T, U>[] => {
    return !target.some(predicate)
}, 2)
