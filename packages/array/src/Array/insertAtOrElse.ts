import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # insertAtOrElse
 *
 * ```ts
 * function Array.insertAtOrElse<T, U>(
 *     target: readonly T[],
 *     idx: number,
 *     value: NoInfer<T>,
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): T[] | U
 * ```
 *
 * Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or the result of calling `callback` with the array if the index is out of bounds.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.insertAtOrElse([1, 2, 3], 10, 99, (arr) => arr.length); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3],
 *     Array.insertAtOrElse(10, 99, (arr) => arr.length),
 * ); // 3
 * ```
 *
 */
export const insertAtOrElse: {
    <T, U>(idx: number, value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => T[] | U
    <T, U>(target: readonly T[], idx: number, value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U
} = dfdlT(<T, U>(target: readonly T[], idx: number, value: NoInfer<T>, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U => {
    if (idx < 0 || idx > target.length) return orElse(target)
    const clone = cloneArray(target)
    clone.splice(idx, 0, value)
    return clone
}, 4)
