import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.first(array)`
 *
 * Returns the first element of `array`, or `undefined` if the array is empty.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.first([1, 2, 3, 4]); // 1
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.first()); // 1
 * ```
 */
export const first: {
    (): <T>(target: readonly T[]) => T | undefined
    <T>(target: readonly T[]): T | undefined
} = dfdlT(<T>(target: readonly T[]): T | undefined => {
    return target[0]
}, 1)
