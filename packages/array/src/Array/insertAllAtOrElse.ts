import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { insertAllAt } from "./insertAllAt"

/**
 * # insertAllAtOrElse
 *
 * ```ts
 * function Array.insertAllAtOrElse(
 *     array: T[],
 *     index: number,
 *     values: U[],
 *     fallback: (array: T[]) => V
 * ): T[] | V
 * ```
 *
 * Inserts all `values` at the specified `idx` in `target`. If the index is out of bounds, calls `orElse` with the original array. Supports iterables.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.insertAllAtOrElse([1, 2, 3], 1, [8, 9], () => []); // [1, 8, 9, 2, 3]
 * Array.insertAllAtOrElse([1, 2, 3], 5, [8, 9], (arr) => arr); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3],
 *     Array.insertAllAtOrElse(1, [8, 9], () => []),
 * ); // [1, 8, 9, 2, 3]
 *
 * pipe(
 *     [1, 2, 3],
 *     Array.insertAllAtOrElse(5, [8, 9], (arr) => arr),
 * ); // [1, 2, 3]
 * ```
 *
 */
export const insertAllAtOrElse: {
    <T, U>(idx: number, values: Iterable<NoInfer<T>>, orElse: OrElse<T, U>): (target: T[]) => T[] | U
    <T, U>(idx: number, values: Iterable<NoInfer<T>>, orElse: OrElse<T, U>): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], idx: number, values: Iterable<NoInfer<T>>, orElse: OrElse<T, U>): T[] | U
    <T, U>(target: readonly T[], idx: number, values: Iterable<NoInfer<T>>, orElse: OrElse<T, U>): readonly T[] | U
} = dfdlT(<T, U>(target: T[], idx: number, values: Iterable<NoInfer<T>>, orElse: OrElse<T, U>): T[] | U => {
    if (idx < 0 || idx > target.length) return orElse(target)
    return insertAllAt(target, idx, values)
}, 4)
