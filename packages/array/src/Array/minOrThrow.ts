import { dfdlT } from "@monstermann/dfdl"

/**
 * # minOrThrow
 *
 * ```ts
 * function Array.minOrThrow(array: number[]): number
 * ```
 *
 * Returns the minimum value from `target` array, or throws an error if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.minOrThrow([5, 2, 8, 1]); // 1
 * Array.minOrThrow([]); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([5, 2, 8, 1], Array.minOrThrow()); // 1
 * pipe([], Array.minOrThrow()); // throws FnError
 * ```
 *
 */
export const minOrThrow: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dfdlT((target: readonly number[]): number => {
    if (target.length === 0) throw new Error("Array.minOrThrow: Target is empty.")
    return target.reduce((a, b) => Math.min(a, b), 0)
}, 1)
