import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.at(array, offset)`
 *
 * Returns the value at the specified `offset`.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.at([1, 2, 3], -1); // 3
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3], Array.at(-1)); // 3
 * ```
 */
export const at: {
    (offset: number): <T>(target: readonly T[]) => T | undefined
    <T>(target: readonly T[], offset: number): T | undefined
} = dfdlT(<T>(target: readonly T[], offset: number): T | undefined => {
    return target.at(offset)
}, 2)
