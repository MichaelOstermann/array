import { dfdlT } from "@monstermann/dfdl"

/**
 * # isEmpty
 *
 * ```ts
 * function Array.isEmpty(array: T[]): boolean
 * ```
 *
 * Returns `true` if `array` has no elements, otherwise returns `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.isEmpty([]); // true
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([], Array.isEmpty()); // true
 * ```
 *
 */
export const isEmpty: {
    (): <T>(target: readonly T[]) => boolean
    <T>(target: readonly T[]): boolean
} = dfdlT(<T>(target: readonly T[]): boolean => {
    return target.length === 0
}, 1)
