import { dfdlT } from "@monstermann/dfdl"

/**
 * # sum
 *
 * ```ts
 * function Array.sum(array: number[]): number
 * ```
 *
 * Returns the sum of all numbers in `array`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.sum([1, 2, 3, 4]); // 10
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.sum()); // 10
 * ```
 *
 */
export const sum: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dfdlT((target: readonly number[]): number => {
    return target.reduce((a, b) => a + b, 0)
}, 1)
