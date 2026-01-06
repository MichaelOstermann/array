import { dfdlT } from "@monstermann/dfdl"

/**
 * # lastIndexOf
 *
 * ```ts
 * function Array.lastIndexOf(array: T[], value: T): number
 * ```
 *
 * Returns the last index at which `value` can be found in `array`, or -1 if it is not present.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.lastIndexOf([1, 2, 3, 2, 4], 2); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 2, 4], Array.lastIndexOf(2)); // 3
 * ```
 *
 */
export const lastIndexOf: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], value: NoInfer<T>): number
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): number => {
    return target.lastIndexOf(value)
}, 2)
