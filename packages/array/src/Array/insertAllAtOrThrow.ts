import { dfdlT } from "@monstermann/dfdl"
import { insertAllAt } from "./insertAllAt"

/**
 * # insertAllAtOrThrow
 *
 * ```ts
 * function Array.insertAllAtOrThrow<T>(
 *     target: readonly T[],
 *     idx: number,
 *     values: Iterable<NoInfer<T>>,
 * ): readonly T[]
 * ```
 *
 * Inserts all `values` at the specified `idx` in `target`. If the index is out of bounds, throws an error. Supports iterables.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.insertAllAtOrThrow([1, 2, 3], 1, [8, 9]); // [1, 8, 9, 2, 3]
 * Array.insertAllAtOrThrow([1, 2, 3], 5, [8, 9]); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3], Array.insertAllAtOrThrow(1, [8, 9])); // [1, 8, 9, 2, 3]
 * pipe([1, 2, 3], Array.insertAllAtOrThrow(5, [8, 9])); // throws FnError
 * ```
 *
 */
export const insertAllAtOrThrow: {
    <T>(idx: number, values: Iterable<NoInfer<T>>): (target: T[]) => T[]
    <T>(idx: number, values: Iterable<NoInfer<T>>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], idx: number, values: Iterable<NoInfer<T>>): T[]
    <T>(target: readonly T[], idx: number, values: Iterable<NoInfer<T>>): readonly T[]
} = dfdlT(<T>(target: T[], idx: number, values: Iterable<NoInfer<T>>): T[] => {
    if (idx < 0 || idx > target.length) throw new Error("Array.insertAllAtOrThrow: Index is out of range.")
    return insertAllAt(target, idx, values)
}, 3)
