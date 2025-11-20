import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `Array.sort(target, comparator)`
 *
 * Returns a new array with the elements of `target` sorted using the provided `comparator` function.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.sort([3, 1, 4, 2], (a, b) => a - b); // [1, 2, 3, 4]
 * Array.sort(["c", "a", "b"], (a, b) => a.localeCompare(b)); // ['a', 'b', 'c']
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [3, 1, 4, 2],
 *     Array.sort((a, b) => a - b),
 * ); // [1, 2, 3, 4]
 * pipe(
 *     ["c", "a", "b"],
 *     Array.sort((a, b) => a.localeCompare(b)),
 * ); // ['a', 'b', 'c']
 * ```
 */
export const sort: {
    <T>(comparator: (a: NoInfer<T>, b: NoInfer<T>) => number): (target: readonly T[]) => T[]
    <T>(target: readonly T[], comparator: (a: NoInfer<T>, b: NoInfer<T>) => number): T[]
} = dfdlT(<T>(target: readonly T[], comparator: (a: NoInfer<T>, b: NoInfer<T>) => number): T[] => {
    return cloneArray(target).sort(comparator)
}, 2)
