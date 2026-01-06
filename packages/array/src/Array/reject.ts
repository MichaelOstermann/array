import type { ArrayGuard, ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { addRange, createRange, hasRange, spliceRange } from "./internals/range"

/**
 * # reject
 *
 * ```ts
 * function Array.reject(
 *     array: T[],
 *     predicate: (value: T, index: number, array: T[]) => boolean
 * ): T[]
 * ```
 *
 * Returns a new array with elements from `array` that do not satisfy the provided `predicate` function.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.reject([1, 2, 3, 4, 5], (x) => x % 2 === 0); // [1, 3, 5]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4, 5],
 *     Array.reject((x) => x % 2 === 0),
 * ); // [1, 3, 5]
 * ```
 *
 */
export const reject: {
    <T, U extends T>(predicate: ArrayGuard<T, U>): (target: T[]) => Exclude<T, U>[]
    <T, U extends T>(predicate: ArrayGuard<T, U>): (target: readonly T[]) => readonly Exclude<T, U>[]

    <T>(predicate: ArrayPredicate<T>): (target: T[]) => T[]
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => readonly T[]

    <T, U extends T>(target: T[], predicate: ArrayGuard<T, U>): Exclude<T, U>[]
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): readonly Exclude<T, U>[]

    <T>(target: T[], predicate: ArrayPredicate<T>): T[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): readonly T[]
} = dfdlT(<T, U extends T>(target: T[], predicate: ArrayGuard<T, U>): Exclude<T, U>[] => {
    const range = createRange()

    for (let i = 0; i < target.length; i++) {
        if (predicate(target[i]!, i, target)) {
            addRange(range, i)
        }
    }

    if (hasRange(range)) {
        target = cloneArray(target)
        spliceRange(target, range)
    }

    return target as any
}, 2)
