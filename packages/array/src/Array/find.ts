import type { ArrayGuard, ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.find(array, predicate)`
 *
 * Returns the first element in `array` that satisfies the provided `predicate` function, or `undefined` if no element is found.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.find([1, 2, 3, 4], (x) => x > 2); // 3
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.find((x) => x > 2),
 * ); // 3
 * ```
 */
export const find: {
    <T, U extends T>(predicate: ArrayGuard<T, U>): (target: readonly T[]) => U | undefined
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => T | undefined
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): U | undefined
    <T>(target: T[], predicate: ArrayPredicate<T>): T | undefined
} = dfdlT(<T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): U | undefined => {
    return target.find(predicate)
}, 2)
