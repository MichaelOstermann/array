import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # findRemoveLastOrThrow
 *
 * ```ts
 * function Array.findRemoveLastOrThrow<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): T[]
 * ```
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or throws an error if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findRemoveLastOrThrow([1, 2, 3, 4], (x) => x > 2); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findRemoveLastOrThrow((x) => x > 2),
 * ); // [1, 2, 3]
 * ```
 *
 */
export const findRemoveLastOrThrow: {
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => T[]
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): T[]
} = dfdlT(<T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): T[] => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) throw new Error("Array.findRemoveLastOrThrow: Value not found.")
    const result = cloneArray(target)
    result.splice(idx, 1)
    return result
}, 2)
