import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { resolveOffset } from "./internals/offset"

/**
 * # mapAtOrElse
 *
 * ```ts
 * function Array.mapAtOrElse<T, U>(
 *     target: readonly T[],
 *     idx: number,
 *     map: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => T,
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): readonly T[] | U
 * ```
 *
 * Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element, or the result of calling `callback` with the array if the index is out of bounds.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.mapAtOrElse(
 *     [1, 2, 3],
 *     10,
 *     (x) => x * 10,
 *     (arr) => arr.length,
 * ); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3],
 *     Array.mapAtOrElse(
 *         10,
 *         (x) => x * 10,
 *         (arr) => arr.length,
 *     ),
 * ); // 3
 * ```
 *
 */
export const mapAtOrElse: {
    <T, U>(idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => U): (target: T[]) => T[] | U
    <T, U>(idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => readonly T[] | U

    <T, U>(target: T[], idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U
    <T, U>(target: readonly T[], idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => U): readonly T[] | U
} = dfdlT(<T, U>(target: T[], idx: number, map: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T, orElse: (target: readonly NoInfer<T>[]) => U): T[] | U => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return orElse(target)
    const prev = target[offset]! as T
    const next = map(prev, offset, target)
    if (prev === next) return target
    target = cloneArray(target)
    target.splice(offset, 1, next)
    return target
}, 4)
