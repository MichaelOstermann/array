import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # replaceOr
 *
 * ```ts
 * function Array.replaceOr(
 *     array: T[],
 *     oldValue: U,
 *     newValue: V,
 *     fallback: W
 * ): T[] | W
 * ```
 *
 * Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, returns `or`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.replaceOr([1, 2, 3, 2], 2, 9, []); // [1, 9, 3, 2]
 * Array.replaceOr([1, 2, 3], 4, 9, []); // []
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 2], Array.replaceOr(2, 9, [])); // [1, 9, 3, 2]
 * pipe([1, 2, 3], Array.replaceOr(4, 9, [])); // []
 * ```
 *
 */
export const replaceOr: {
    <T, U>(value: NoInfer<T>, replacement: NoInfer<T>, or: U): (target: T[]) => T[] | U
    <T, U>(value: NoInfer<T>, replacement: NoInfer<T>, or: U): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>, or: U): T[] | U
    <T, U>(target: readonly T[], value: NoInfer<T>, replacement: NoInfer<T>, or: U): readonly T[] | U
} = dfdlT(<T, U>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>, or: U): T[] | U => {
    if (value === replacement) return target
    const idx = target.indexOf(value)
    if (idx === -1) return or
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 4)
