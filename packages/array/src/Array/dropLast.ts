import { dfdlT } from "@monstermann/dfdl"
import { cloneArray, markAsMutable } from "@monstermann/remmi"

/**
 * # dropLast
 *
 * ```ts
 * function Array.dropLast<T>(
 *     target: readonly T[],
 *     amount: number,
 * ): readonly T[]
 * ```
 *
 * Removes `amount` of elements from the end of the `target` array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.dropLast([1, 2, 3, 4, 5], 2); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4, 5], Array.dropLast(2)); // [1, 2, 3]
 * ```
 *
 */
export const dropLast: {
    (amount: number): <T>(target: T[]) => T[]
    (amount: number): <T>(target: readonly T[]) => readonly T[]

    <T>(target: T[], amount: number): T[]
    <T>(target: readonly T[], amount: number): readonly T[]
} = dfdlT(<T>(target: T[], amount: number): T[] => {
    if (!Number.isInteger(amount) || target.length === 0 || amount < 0) return target
    if (target.length <= amount) return markAsMutable([])
    target = cloneArray(target)
    target.splice(target.length - amount, amount)
    return target
}, 2)
