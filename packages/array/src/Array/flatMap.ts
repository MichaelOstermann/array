import type { ArrayMap } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { markAsMutable } from "@monstermann/remmi"

/**
 * # flatMap
 *
 * ```ts
 * function Array.flatMap(
 *     array: T[],
 *     mapper: (value: T, index: number, array: T[]) => U[]
 * ): U[]
 * ```
 *
 * Maps each element in `array` using the `mapper` function and flattens the result by one level.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.flatMap([1, 2, 3], (x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3],
 *     Array.flatMap((x) => [x, x * 2]),
 * ); // [1, 2, 2, 4, 3, 6]
 * ```
 *
 */
export const flatMap: {
    <T, U>(mapper: ArrayMap<T, U[]>): (target: T[]) => U[]
    <T, U>(mapper: ArrayMap<T, U[]>): (target: readonly T[]) => readonly U[]

    <T, U>(target: T[], mapper: ArrayMap<T, U[]>): U[]
    <T, U>(target: readonly T[], mapper: ArrayMap<T, U[]>): readonly U[]
} = dfdlT(<T, U>(target: T[], mapper: ArrayMap<T, U[]>): U[] => {
    let hasChanges = false
    const result = target.flatMap((a, b, c) => {
        const output = mapper(a, b, c)
        hasChanges ||= !(output.length === 1 && output[0] === a as any)
        return output
    })
    return hasChanges
        ? markAsMutable(result)
        : target as any
}, 2)
