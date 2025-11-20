import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.last(array)`
 *
 * Returns the last element of `array`, or `undefined` if the array is empty.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.last([1, 2, 3, 4]); // 4
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.last()); // 4
 * ```
 */
export const last: {
    (): <T>(target: readonly T[]) => T | undefined
    <T>(target: readonly T[]): T | undefined
} = dfdlT(<T>(target: readonly T[]): T | undefined => {
    return target.at(-1)
}, 1)
