import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.slice(target, start, end?)`
 *
 * Extracts a section of `target` array from `start` index to `end` index (exclusive). If `end` is not provided, extracts to the end of the array.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.slice([1, 2, 3, 4, 5], 1, 4); // [2, 3, 4]
 * Array.slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
 * Array.slice([1, 2, 3, 4, 5], -2); // [4, 5]
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4, 5], Array.slice(1, 4)); // [2, 3, 4]
 * pipe([1, 2, 3, 4, 5], Array.slice(2)); // [3, 4, 5]
 * pipe([1, 2, 3, 4, 5], Array.slice(-2)); // [4, 5]
 * ```
 */
export const slice: {
    <T>(start: number, end?: number): (target: readonly T[]) => T[]

    <T>(target: readonly T[], start: number, end?: number): T[]
} = dfdlT(<T>(target: readonly T[], start: number, end?: number): T[] => {
    return target.slice(start, end)
}, args => Array.isArray(args[0]))
