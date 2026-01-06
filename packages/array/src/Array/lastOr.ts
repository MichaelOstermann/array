import type { NonNil } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # lastOr
 *
 * ```ts
 * function Array.lastOr(array: T[], fallback: U): T | U
 * ```
 *
 * Returns the last element of `array`, or `fallback` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.lastOr([1, 2, 3, 4], 0); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.lastOr(0)); // 4
 * ```
 *
 */
export const lastOr: {
    <T, U>(or: U): (target: readonly T[]) => NonNil<T> | U
    <T, U>(target: readonly T[], or: U): NonNil<T> | U
} = dfdlT(<T, U>(target: readonly T[], or: U): any => {
    return target.at(-1) ?? or
}, 2)
