import type { ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # findReplaceLastOrThrow
 *
 * ```ts
 * function Array.findReplaceLastOrThrow(
 *     array: T[],
 *     predicate: (value: T, index: number, array: T[]) => boolean,
 *     value: U
 * ): T[]
 * ```
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or throws an error if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findReplaceLastOrThrow([1, 2, 3, 4], (x) => x > 2, 99); // [1, 2, 3, 99]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findReplaceLastOrThrow((x) => x > 2, 99),
 * ); // [1, 2, 3, 99]
 * ```
 *
 */
export const findReplaceLastOrThrow: {
    <T>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>): (target: T[]) => T[]
    <T>(predicate: ArrayPredicate<T>, replacement: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>): T[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], predicate: ArrayPredicate<T>, replacement: NoInfer<T>): T[] => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) throw new Error("Array.findReplaceLastOrThrow: Value not found")
    const prev = target[idx]! as T
    if (prev === replacement) return target
    const result = cloneArray(target)
    result.splice(idx, 1, replacement)
    return result
}, 3)
