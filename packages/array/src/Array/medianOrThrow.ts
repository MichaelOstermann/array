import { dfdlT } from "@monstermann/dfdl"

/**
 * # medianOrThrow
 *
 * ```ts
 * function Array.medianOrThrow(array: number[]): number
 * ```
 *
 * Returns the median value from `array`, or throws an error if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.medianOrThrow([1, 3, 5]); // 3
 * Array.medianOrThrow([1, 2, 3, 4]); // 2.5
 * Array.medianOrThrow([]); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 3, 5], Array.medianOrThrow()); // 3
 * pipe([1, 2, 3, 4], Array.medianOrThrow()); // 2.5
 * pipe([], Array.medianOrThrow()); // throws FnError
 * ```
 *
 */
export const medianOrThrow: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dfdlT((target: readonly number[]): number => {
    if (target.length === 0) throw new Error("Array.medianOrThrow: Target is empty.")
    const sorted = target.toSorted((a, b) => a - b)
    const mid = Math.floor(sorted.length / 2)
    if (sorted.length % 2 === 0) return (sorted[mid - 1]! + sorted[mid]!) / 2
    else return sorted[mid]!
}, 1)
