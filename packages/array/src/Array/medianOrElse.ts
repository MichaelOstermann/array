import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.medianOrElse(array, orElse)`
 *
 * Returns the median value from `array`, or calls `orElse` if the array is empty.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.medianOrElse([1, 3, 5], () => 0); // 3
 * Array.medianOrElse([1, 2, 3, 4], () => 0); // 2.5
 * Array.medianOrElse([], () => 0); // 0
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 3, 5],
 *     Array.medianOrElse(() => 0),
 * ); // 3
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.medianOrElse(() => 0),
 * ); // 2.5
 * pipe(
 *     [],
 *     Array.medianOrElse(() => 0),
 * ); // 0
 * ```
 */
export const medianOrElse: {
    <T>(orElse: OrElse<number, T>): (target: readonly number[]) => number | T
    <T>(target: readonly number[], orElse: OrElse<number, T>): number | T
} = dfdlT(<T>(target: readonly number[], orElse: OrElse<number, T>): number | T => {
    if (target.length === 0) return orElse(target)
    const sorted = target.toSorted((a, b) => a - b)
    const mid = Math.floor(sorted.length / 2)
    if (sorted.length % 2 === 0) return (sorted[mid - 1]! + sorted[mid]!) / 2
    else return sorted[mid]!
}, 2)
