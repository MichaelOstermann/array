import { dfdlT } from "@monstermann/dfdl"

/**
 * # lastIndexOfOrThrow
 *
 * ```ts
 * function Array.lastIndexOfOrThrow(array: T[], value: T): number
 * ```
 *
 * Returns the index of the last occurrence of `value` in `target`. If `value` is not found, throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.lastIndexOfOrThrow([1, 2, 3, 2], 2); // 3
 * Array.lastIndexOfOrThrow([1, 2, 3], 4); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 2], Array.lastIndexOfOrThrow(2)); // 3
 * pipe([1, 2, 3], Array.lastIndexOfOrThrow(4)); // throws FnError
 * ```
 *
 */
export const lastIndexOfOrThrow: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], value: NoInfer<T>): number
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): number => {
    const idx = target.lastIndexOf(value)
    if (idx < 0) throw new Error("Array.lastIndexOf: No value found.")
    return idx
}, 2)
