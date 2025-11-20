import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.meanOrThrow(array)`
 *
 * Returns the mean (average) value from `array`, or throws an error if the array is empty.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.meanOrThrow([1, 2, 3]); // 2
 * Array.meanOrThrow([]); // throws FnError
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3], Array.meanOrThrow()); // 2
 * pipe([], Array.meanOrThrow()); // throws FnError
 * ```
 */
export const meanOrThrow: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dfdlT((target: readonly number[]): number => {
    if (target.length === 0) throw new Error("Array.meanOrThrow: Target is empty.")
    return target.reduce((acc, val) => acc + val, 0) / target.length
}, 1)
