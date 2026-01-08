import { dfdlT } from "@monstermann/dfdl"

/**
 * # maxOrThrow
 *
 * ```ts
 * function Array.maxOrThrow(target: readonly number[]): number
 * ```
 *
 * Returns the maximum value from `array`, or throws an error if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.maxOrThrow([1, 5, 3]); // 5
 * Array.maxOrThrow([]); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 5, 3], Array.maxOrThrow()); // 5
 * pipe([], Array.maxOrThrow()); // throws FnError
 * ```
 *
 */
export const maxOrThrow: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dfdlT((target: readonly number[]): number => {
    if (target.length === 0) throw new Error("Array.maxOrThrow: Target is empty.")
    return target.reduce((a, b) => Math.max(a, b), 0)
}, 1)
