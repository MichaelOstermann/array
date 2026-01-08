import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # removeLastOrThrow
 *
 * ```ts
 * function Array.removeLastOrThrow<T>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 * ): T[]
 * ```
 *
 * Removes the last occurrence of `value` from `target` array. If the value is not found, throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.removeLastOrThrow([1, 2, 3, 2], 2); // [1, 2, 3]
 * Array.removeLastOrThrow([1, 2, 3], 4); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 2], Array.removeLastOrThrow(2)); // [1, 2, 3]
 * pipe([1, 2, 3], Array.removeLastOrThrow(4)); // throws FnError
 * ```
 *
 */
export const removeLastOrThrow: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], value: NoInfer<T>): T[]
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): T[] => {
    const idx = target.lastIndexOf(value)
    if (idx < 0) throw new Error("Array.removeLastOrThrow: Value not found.")
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 2)
