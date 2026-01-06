import { dfdlT } from "@monstermann/dfdl"

/**
 * # at
 *
 * ```ts
 * function Array.at(array: T[], offset: number): T | undefined
 * ```
 *
 * Returns the value at the specified `offset`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.at([1, 2, 3], -1); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3], Array.at(-1)); // 3
 * ```
 *
 */
export const at: {
    (offset: number): <T>(target: readonly T[]) => T | undefined
    <T>(target: readonly T[], offset: number): T | undefined
} = dfdlT(<T>(target: readonly T[], offset: number): T | undefined => {
    return target.at(offset)
}, 2)
