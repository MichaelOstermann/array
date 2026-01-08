import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # append
 *
 * ```ts
 * function Array.append<T>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 * ): T[]
 * ```
 *
 * Appends `value` to the end of `array`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.append([1, 2, 3], 4); // [1, 2, 3, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3], Array.append(4)); // [1, 2, 3, 4]
 * ```
 *
 */
export const append: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], value: NoInfer<T>): T[]
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): T[] => {
    const result = cloneArray(target)
    result.push(value)
    return result
}, 2)
