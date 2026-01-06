import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # replaceLastOrThrow
 *
 * ```ts
 * function Array.replaceLastOrThrow(array: T[], oldValue: U, newValue: V): T[]
 * ```
 *
 * Replaces the last occurrence of `value` in `target` with `replacement`. If `value` is not found, throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.replaceLastOrThrow([1, 2, 3, 2], 2, 9); // [1, 2, 3, 9]
 * Array.replaceLastOrThrow([1, 2, 3], 4, 9); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 2], Array.replaceLastOrThrow(2, 9)); // [1, 2, 3, 9]
 * pipe([1, 2, 3], Array.replaceLastOrThrow(4, 9)); // throws FnError
 * ```
 *
 */
export const replaceLastOrThrow: {
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(value: NoInfer<T>, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], value: NoInfer<T>, replacement: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], value: NoInfer<T>, replacement: NoInfer<T>): T[] => {
    if (value === replacement) return target
    const idx = target.lastIndexOf(value)
    if (idx === -1) throw new Error("Array.replaceLastOrThrow: Value not found")
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 3)
