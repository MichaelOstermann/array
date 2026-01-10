import { dfdlT } from "@monstermann/dfdl"

/**
 * # includesNone
 *
 * ```ts
 * function Array.includesNone<T>(
 *     target: readonly T[],
 *     values: Iterable<NoInfer<T>>,
 * ): boolean
 * ```
 *
 * Returns `true` if `array` contains none of the `values`, otherwise returns `false`. Supports iterables for the `values` parameter.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.includesNone([1, 2, 3, 4], [5, 6, 7]); // true
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.includesNone([5, 6, 7])); // true
 * ```
 *
 */
export const includesNone: {
    <T>(values: Iterable<NoInfer<T>>): (target: readonly T[]) => boolean
    <T>(target: readonly T[], values: Iterable<NoInfer<T>>): boolean
} = dfdlT(<T>(target: readonly T[], values: Iterable<NoInfer<T>>): boolean => {
    for (const value of values) {
        if (target.includes(value)) return false
    }
    return true
}, 2)
