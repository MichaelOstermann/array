import { dfdlT } from "@monstermann/dfdl"
import { filter } from "./filter"

/**
 * # compact
 *
 * ```ts
 * function Array.compact<T>(
 *     target: readonly T[],
 * ): readonly Exclude<T, null | undefined>[]
 * ```
 *
 * Removes all nullable values from `array`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.compact([1, null, undefined]); // [1]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, null, undefined], Array.compact()); // [1]
 * ```
 *
 */
export const compact: {
    (): <T>(target: T[]) => Exclude<T, null | undefined>[]
    (): <T>(target: readonly T[]) => readonly Exclude<T, null | undefined>[]

    <T>(target: T[]): Exclude<T, null | undefined>[]
    <T>(target: readonly T[]): readonly Exclude<T, null | undefined>[]
} = dfdlT(<T>(target: T[]): any => {
    return filter(target, v => v != null)
}, 1)
