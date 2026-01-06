import { dfdlT } from "@monstermann/dfdl"

/**
 * # meanOr
 *
 * ```ts
 * function Array.meanOr(array: number[], fallback: U): number | U
 * ```
 *
 * Returns the mean (average) value of the number `array`, or `fallback` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.meanOr([1, 2, 3, 4], 0); // 2.5
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.meanOr(0)); // 2.5
 * ```
 *
 */
export const meanOr: {
    (or: number): (target: readonly number[]) => number
    (target: readonly number[], or: number): number
} = dfdlT((target: readonly number[], or: number): number => {
    if (target.length === 0) return or
    return target.reduce((acc, val) => acc + val, 0) / target.length
}, 2)
