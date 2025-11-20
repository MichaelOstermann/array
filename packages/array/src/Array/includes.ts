import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.includes(array, value)`
 *
 * Returns `true` if `array` contains `value`, otherwise returns `false`.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.includes([1, 2, 3, 4], 3); // true
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.includes(3)); // true
 * ```
 */
export const includes: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => boolean
    <T>(target: readonly T[], value: NoInfer<T>): boolean
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): boolean => {
    return target.includes(value)
}, 2)
