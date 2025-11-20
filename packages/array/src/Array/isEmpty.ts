import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.isEmpty(array)`
 *
 * Returns `true` if `array` has no elements, otherwise returns `false`.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.isEmpty([]); // true
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe([], Array.isEmpty()); // true
 * ```
 */
export const isEmpty: {
    (): <T>(target: readonly T[]) => boolean
    <T>(target: readonly T[]): boolean
} = dfdlT(<T>(target: readonly T[]): boolean => {
    return target.length === 0
}, 1)
