import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # findRemoveOr
 *
 * ```ts
 * function Array.findRemoveOr<T, U>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 *     or: U,
 * ): T[] | U
 * ```
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or `fallback` if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findRemoveOr([1, 2, 3, 4], (x) => x > 10, []); // []
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findRemoveOr((x) => x > 10, []),
 * ); // []
 * ```
 *
 */
export const findRemoveOr: {
    <T, U>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, or: U): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, or: U): T[] | U
} = dfdlT(<T, U>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, or: U): T[] | U => {
    const idx = target.findIndex(predicate)
    if (idx === -1) return or
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 3)
