import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # replaceLastOrElse
 *
 * ```ts
 * function Array.replaceLastOrElse(
 *     array: T[],
 *     oldValue: U,
 *     newValue: V,
 *     fallback: (array: T[]) => W
 * ): T[] | W
 * ```
 *
 * Replaces the last occurrence of `value` in `target` with `replacement`. If `value` is not found, calls `orElse` with the original array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.replaceLastOrElse([1, 2, 3, 2], 2, 9, () => []); // [1, 2, 3, 9]
 * Array.replaceLastOrElse([1, 2, 3], 4, 9, (arr) => arr); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 2],
 *     Array.replaceLastOrElse(2, 9, () => []),
 * ); // [1, 2, 3, 9]
 *
 * pipe(
 *     [1, 2, 3],
 *     Array.replaceLastOrElse(4, 9, (arr) => arr),
 * ); // [1, 2, 3]
 * ```
 *
 */
export const replaceLastOrElse: {
    <T, U>(value: NoInfer<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): (target: T[]) => T[] | U
    <T, U>(value: NoInfer<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): T[] | U
    <T, U>(target: readonly T[], value: NoInfer<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): readonly T[] | U
} = dfdlT(<T, U>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>, orElse: OrElse<T, U>): T[] | U => {
    if (value === replacement) return target
    const idx = target.lastIndexOf(value)
    if (idx === -1) return orElse(target)
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 4)
