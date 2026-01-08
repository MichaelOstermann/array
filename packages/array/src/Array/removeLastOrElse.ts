import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # removeLastOrElse
 *
 * ```ts
 * function Array.removeLastOrElse<T, U>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): T[] | U
 * ```
 *
 * Removes the last occurrence of `value` from `target` array. If the value is not found, calls the `orElse` function with the original array and returns its result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.removeLastOrElse([1, 2, 3, 2], 2, () => []); // [1, 2, 3]
 * Array.removeLastOrElse([1, 2, 3], 4, (arr) => arr); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 2],
 *     Array.removeLastOrElse(2, () => []),
 * ); // [1, 2, 3]
 *
 * pipe(
 *     [1, 2, 3],
 *     Array.removeLastOrElse(4, (arr) => arr),
 * ); // [1, 2, 3]
 * ```
 *
 */
export const removeLastOrElse: {
    <T, U>(value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U
} = dfdlT(<T, U>(target: readonly T[], value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U => {
    const idx = target.lastIndexOf(value)
    if (idx < 0) return orElse(target)
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 3)
