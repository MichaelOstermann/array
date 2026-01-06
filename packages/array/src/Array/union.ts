import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # union
 *
 * ```ts
 * function Array.union(target: T[], source: T[]): T[]
 * ```
 *
 * Returns a new array containing all unique elements from both `target` and `source`. Elements from `source` that are not already in `target` are added to the result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.union([1, 2, 3], [3, 4, 5]); // [1, 2, 3, 4, 5]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3], Array.union([3, 4, 5])); // [1, 2, 3, 4, 5]
 * ```
 *
 */
export const union: {
    <T>(source: Iterable<NoInfer<T>>): (target: T[]) => T[]
    <T>(source: Iterable<NoInfer<T>>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], source: Iterable<NoInfer<T>>): T[]
    <T>(target: readonly T[], source: Iterable<NoInfer<T>>): readonly T[]
} = dfdlT(<T>(target: T[], source: Iterable<NoInfer<T>>): T[] => {
    let result: T[] | undefined
    for (const item of source) {
        if (!target.includes(item)) {
            result ??= cloneArray(target)
            result.push(item)
        }
    }
    return result ?? target
}, 2)
