import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # indexOfOrElse
 *
 * ```ts
 * function Array.indexOfOrElse(
 *     array: T[],
 *     value: T,
 *     fallback: (array: T[]) => U
 * ): number | U
 * ```
 *
 * Returns the index of the first occurrence of `value` in `target`. If `value` is not found, calls `orElse` with the original array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.indexOfOrElse([1, 2, 3, 2], 2, () => -1); // 1
 * Array.indexOfOrElse([1, 2, 3], 4, (arr) => arr.length); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 2],
 *     Array.indexOfOrElse(2, () => -1),
 * ); // 1
 *
 * pipe(
 *     [1, 2, 3],
 *     Array.indexOfOrElse(4, (arr) => arr.length),
 * ); // 3
 * ```
 *
 */
export const indexOfOrElse: {
    <T, U>(value: NoInfer<T>, orElse: OrElse<T, U>): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], value: NoInfer<T>, orElse: OrElse<T, U>): number | U
} = dfdlT(<T, U>(target: readonly T[], value: NoInfer<T>, orElse: OrElse<T, U>): number | U => {
    const idx = target.indexOf(value)
    return idx < 0 ? orElse(target) : idx
}, 3)
