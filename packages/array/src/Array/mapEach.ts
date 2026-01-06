import type { ArrayMap } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # mapEach
 *
 * ```ts
 * function Array.mapEach(
 *     array: T[],
 *     mapper: (value: T, index: number, array: T[]) => U
 * ): U[]
 * ```
 *
 * Applies the `mapper` function to each element in `array`, returning a new array with the mapped elements.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.mapEach([1, 2, 3, 4], (x) => x * 2); // [2, 4, 6, 8]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.mapEach((x) => x * 2),
 * ); // [2, 4, 6, 8]
 * ```
 *
 */
export const mapEach: {
    <T, U>(mapper: ArrayMap<T, U>): (target: T[]) => U[]
    <T, U>(mapper: ArrayMap<T, U>): (target: readonly T[]) => readonly U[]

    <T, U>(target: T[], mapper: ArrayMap<T, U>): U[]
    <T, U>(target: readonly T[], mapper: ArrayMap<T, U>): readonly U[]
} = dfdlT(<T, U>(target: T[], mapper: ArrayMap<T, U>): U[] => {
    let result: any
    for (let i = 0; i < target.length; i++) {
        const prev = target[i]! as T
        const next = mapper(prev, i, target)
        if (prev === next as any) continue
        result ??= cloneArray(target)
        result[i] = next
    }
    return result ?? target
}, 2)
