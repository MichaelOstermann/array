import { dfdlT } from "@monstermann/dfdl"

/**
 * # maxOr
 *
 * ```ts
 * function Array.maxOr(array: number[], fallback: U): number | U
 * ```
 *
 * Returns the maximum value in the number `array`, or `fallback` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.maxOr([1, 3, 2, 5], 0); // 5
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 3, 2, 5], Array.maxOr(0)); // 5
 * ```
 *
 */
export const maxOr: {
    <T>(or: T): (target: readonly number[]) => number | T
    <T>(target: readonly number[], or: T): number | T
} = dfdlT(<T>(target: readonly number[], or: T): number | T => {
    if (target.length === 0) return or
    return target.reduce((a, b) => Math.max(a, b), 0)
}, 2)
