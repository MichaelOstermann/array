import type { ArrayMap } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { resolveOffset } from "./internals/offset"

/**
 * # mapAt
 *
 * ```ts
 * function Array.mapAt(
 *     array: T[],
 *     index: number,
 *     mapper: (value: T, index: number, array: T[]) => U
 * ): T[]
 * ```
 *
 * Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.mapAt([1, 2, 3, 4], 1, (x) => x * 10); // [1, 20, 3, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.mapAt(1, (x) => x * 10),
 * ); // [1, 20, 3, 4]
 * ```
 *
 */
export const mapAt: {
    <T>(idx: number, map: ArrayMap<T>): (target: T[]) => T[]
    <T>(idx: number, map: ArrayMap<T>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], idx: number, map: ArrayMap<T>): T[]
    <T>(target: readonly T[], idx: number, map: ArrayMap<T>): readonly T[]
} = dfdlT(<T>(target: T[], idx: number, map: ArrayMap<T>): T[] => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) return target
    const prev = target[offset]! as T
    const next = map(prev, offset, target)
    if (prev === next) return target
    target = cloneArray(target)
    target.splice(offset, 1, next)
    return target
}, 3)
