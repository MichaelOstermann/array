import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # insertAt
 *
 * ```ts
 * function Array.insertAt(array: T[], index: number, value: U): T[]
 * ```
 *
 * Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.insertAt([1, 2, 3], 1, 10); // [1, 10, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3], Array.insertAt(1, 10)); // [1, 10, 2, 3]
 * ```
 *
 */
export const insertAt: {
    <T>(idx: number, value: NoInfer<T>): (target: T[]) => T[]
    <T>(idx: number, value: NoInfer<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], idx: number, value: NoInfer<T>): T[]
    <T>(target: readonly T[], idx: number, value: NoInfer<T>): readonly T[]
} = dfdlT(<T>(target: T[], idx: number, value: NoInfer<T>): T[] => {
    if (idx < 0 || idx > target.length) return target
    target = cloneArray(target)
    target.splice(idx, 0, value)
    return target
}, 3)
