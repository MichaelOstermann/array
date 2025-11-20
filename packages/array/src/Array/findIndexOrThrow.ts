import type { ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.findIndexOrThrow(target, predicate)`
 *
 * Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, throws an error.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.findIndexOrThrow([1, 2, 3, 4], (x) => x > 2); // 2
 * Array.findIndexOrThrow([1, 2, 3, 4], (x) => x > 5); // throws FnError
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findIndexOrThrow((x) => x > 2),
 * ); // 2
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findIndexOrThrow((x) => x > 5),
 * ); // throws FnError
 * ```
 */
export const findIndexOrThrow: {
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): number
} = dfdlT(<T>(target: readonly T[], predicate: ArrayPredicate<T>): number => {
    const idx = target.findIndex(predicate)
    if (idx < 0) throw new Error("Array.findIndexOrThrow: No value found.")
    return idx
}, 2)
