import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.includesAny(array, values)`
 *
 * Returns `true` if `array` contains any of the `values`, otherwise returns `false`. Supports iterables for the `values` parameter.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.includesAny([1, 2, 3, 4], [5, 6, 2]); // true
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.includesAny([5, 6, 2])); // true
 * ```
 */
export const includesAny: {
    <T>(values: Iterable<NoInfer<T>>): (target: readonly T[]) => boolean
    <T>(target: readonly T[], values: Iterable<NoInfer<T>>): boolean
} = dfdlT(<T>(target: readonly T[], values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (target.includes(value)) return true
    }
    return false
}, 2)
