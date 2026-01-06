import type { ArrayGuard, ArrayMap, ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # findMap
 *
 * ```ts
 * function Array.findMap(
 *     array: T[],
 *     predicate: (value: T, index: number, array: T[]) => boolean,
 *     mapper: (value: T, index: number, array: T[]) => U
 * ): T[]
 * ```
 *
 * Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findMap(
 *     [1, 2, 3, 4],
 *     (x) => x > 2,
 *     (x) => x * 10,
 * ); // [1, 2, 30, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findMap(
 *         (x) => x > 2,
 *         (x) => x * 10,
 *     ),
 * ); // [1, 2, 30, 4]
 * ```
 *
 */
export const findMap: {
    <T, U extends T>(predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): (target: T[]) => T[]
    <T, U extends T>(predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): (target: readonly T[]) => readonly T[]

    <T>(predicate: ArrayPredicate<T>, mapper: ArrayMap<T>): (target: T[]) => T[]
    <T>(predicate: ArrayPredicate<T>, mapper: ArrayMap<T>): (target: readonly T[]) => readonly T[]

    <T, U extends T>(target: T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): T[]
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): readonly T[]

    <T>(target: T[], predicate: ArrayPredicate<T>, mapper: ArrayMap<T>): T[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>, mapper: ArrayMap<T>): readonly T[]
} = dfdlT(<T, U extends T>(target: T[], predicate: ArrayGuard<T, U>, mapper: ArrayMap<T>): T[] => {
    const idx = target.findIndex(predicate)
    if (idx === -1) return target
    const prev = target[idx]! as T
    const next = mapper(prev, idx, target)
    if (prev === next) return target
    const result = cloneArray(target)
    result.splice(idx, 1, next)
    return result
}, 3)
