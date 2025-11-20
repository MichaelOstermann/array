import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `Array.clone(array)`
 *
 * Creates a shallow copy of `array`.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.clone([1, 2, 3, 4]); // [1, 2, 3, 4]
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.clone()); // [1, 2, 3, 4]
 * ```
 */
export const clone: {
    (): <T>(target: readonly T[]) => T[]
    <T>(target: readonly T[]): T[]
} = dfdlT(cloneArray, 1)
