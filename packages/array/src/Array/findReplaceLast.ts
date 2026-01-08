import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # findReplaceLast
 *
 * ```ts
 * function Array.findReplaceLast<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 *     replacement: NoInfer<T>,
 * ): readonly T[]
 * ```
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findReplaceLast([1, 2, 3, 4], (x) => x > 2, 10); // [1, 2, 3, 10]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findReplaceLast((x) => x > 2, 10),
 * ); // [1, 2, 3, 10]
 * ```
 *
 */
export const findReplaceLast: {
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, replacement: NoInfer<T>): T[] => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) return target
    const prev = target[idx]! as T
    if (prev === replacement) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 3)
