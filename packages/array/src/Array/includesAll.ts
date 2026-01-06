import { dfdlT } from "@monstermann/dfdl"

/**
 * # includesAll
 *
 * ```ts
 * function Array.includesAll(array: T[], values: T[]): boolean
 * ```
 *
 * Returns `true` if `array` contains all `values`, otherwise returns `false`. Supports iterables for the `values` parameter.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.includesAll([1, 2, 3, 4], [2, 3]); // true
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.includesAll([2, 3])); // true
 * ```
 *
 */
export const includesAll: {
    <T>(values: Iterable<NoInfer<T>>): (target: readonly T[]) => boolean
    <T>(target: readonly T[], values: Iterable<NoInfer<T>>): boolean
} = dfdlT(<T>(target: readonly T[], values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (!target.includes(value)) return false
    }
    return true
}, 2)
