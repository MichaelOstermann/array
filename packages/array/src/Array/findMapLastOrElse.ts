import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # findMapLastOrElse
 *
 * ```ts
 * function Array.findMapLastOrElse<T, V>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 *     mapper: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => T,
 *     orElse: (target: readonly NoInfer<T>[]) => V,
 * ): readonly T[] | V
 * ```
 *
 * Finds the last element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or the result of calling `callback` with the array if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findMapLastOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     (x) => x * 10,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findMapLastOrElse(
 *         (x) => x > 10,
 *         (x) => x * 10,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 *
 */
export const findMapLastOrElse: {
    <T, U extends T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): (target: T[]) => T[] | V
    <T, U extends T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): (target: readonly T[]) => readonly T[] | V

    <T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): (target: T[]) => T[] | V
    <T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): (target: readonly T[]) => readonly T[] | V

    <T, U extends T, V>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): T[] | V
    <T, U extends T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<U>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): readonly T[] | V

    <T, V>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): T[] | V
    <T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): readonly T[] | V
} = dfdlT(<T, V>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => V): T[] | V => {
    const idx = target.findLastIndex(predicate)
    if (idx === -1) return orElse(target)
    const prev = target[idx]! as T
    const next = mapper(prev, idx, target)
    if (prev === next) return target
    const result = cloneArray(target)
    result.splice(idx, 1, next)
    return result
}, 4)
