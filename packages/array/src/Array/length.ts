import { dfdlT } from "@monstermann/dfdl"

/**
 * # length
 *
 * ```ts
 * function Array.length(array: T[]): number
 * ```
 *
 * Returns the number of elements in `array`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.length([1, 2, 3, 4]); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.length()); // 4
 * ```
 *
 */
export const length: {
    (): <T>(target: readonly T[]) => number
    <T>(target: readonly T[]): number
} = dfdlT(<T>(target: readonly T[]): number => {
    return target.length
}, 1)
