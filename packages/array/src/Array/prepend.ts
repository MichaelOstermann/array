import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # prepend
 *
 * ```ts
 * function Array.prepend<T>(
 *     target: readonly T[],
 *     value: NoInfer<T>,
 * ): T[]
 * ```
 *
 * Adds `value` to the beginning of `array`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.prepend([2, 3, 4], 1); // [1, 2, 3, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([2, 3, 4], Array.prepend(1)); // [1, 2, 3, 4]
 * ```
 *
 */
export const prepend: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => T[]
    <T>(target: readonly T[], value: NoInfer<T>): T[]
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): T[] => {
    const clone = cloneArray(target)
    clone.unshift(value)
    return clone
}, 2)
