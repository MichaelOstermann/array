import type { ArrayGuard, ArrayPredicate, NonNil } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.findLastOrThrow(array, predicate)`
 *
 * Returns the last element in `array` that satisfies the provided `predicate` function, or throws an error if no element is found.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.findLastOrThrow([1, 2, 3, 4], (x) => x > 2); // 4
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findLastOrThrow((x) => x > 2),
 * ); // 4
 * ```
 */
export const findLastOrThrow: {
    <T, U extends T>(predicate: ArrayGuard<T, U>): (target: readonly T[]) => NonNil<U>
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => NonNil<T>
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): NonNil<U>
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): NonNil<T>
} = dfdlT(<T>(target: readonly T[], predicate: ArrayPredicate<T>): any => {
    const value = target.findLast(predicate)
    if (value != null) return value
    throw new Error("Array.findLastOrThrow: Value not found.")
}, 2)
