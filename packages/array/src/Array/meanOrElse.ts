import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.meanOrElse(array, orElse)`
 *
 * Returns the mean (average) value from `array`, or calls `orElse` if the array is empty.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.meanOrElse([1, 2, 3], () => 0); // 2
 * Array.meanOrElse([], () => 0); // 0
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3],
 *     Array.meanOrElse(() => 0),
 * ); // 2
 * pipe(
 *     [],
 *     Array.meanOrElse(() => 0),
 * ); // 0
 * ```
 */
export const meanOrElse: {
    <T>(orElse: OrElse<number, T>): (target: readonly number[]) => number | T
    <T>(target: readonly number[], orElse: OrElse<number, T>): number | T
} = dfdlT(<T>(target: readonly number[], orElse: OrElse<number, T>): number | T => {
    if (target.length === 0) return orElse(target)
    return target.reduce((acc, val) => acc + val, 0) / target.length
}, 2)
