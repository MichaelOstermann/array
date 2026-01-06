import type { ArrayGuard, ArrayPredicate, NonNil } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # findOrThrow
 *
 * ```ts
 * function Array.findOrThrow(
 *     array: T[],
 *     predicate: (value: T, index: number, array: T[]) => boolean
 * ): T
 * ```
 *
 * Returns the first element in `array` that satisfies the provided `predicate` function, or throws an error if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findOrThrow([1, 2, 3, 4], (x) => x > 2); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findOrThrow((x) => x > 2),
 * ); // 3
 * ```
 *
 */
export const findOrThrow: {
    <T, U extends T>(predicate: ArrayGuard<T, U>): (target: readonly T[]) => NonNil<U>
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => NonNil<T>
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): NonNil<U>
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): NonNil<T>
} = dfdlT(<T>(target: readonly T[], predicate: ArrayPredicate<T>): any => {
    const value = target.find(predicate)
    if (value != null) return value
    throw new Error("Array.findOrThrow: Value not found.")
}, 2)
