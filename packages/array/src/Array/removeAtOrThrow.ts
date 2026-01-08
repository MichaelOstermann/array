import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"
import { resolveOffset } from "./internals/offset"

/**
 * # removeAtOrThrow
 *
 * ```ts
 * function Array.removeAtOrThrow<T>(
 *     target: readonly T[],
 *     idx: number,
 * ): T[]
 * ```
 *
 * Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.removeAtOrThrow([1, 2, 3], 1); // [1, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3], Array.removeAtOrThrow(1)); // [1, 3]
 * ```
 *
 */
export const removeAtOrThrow: {
    <T>(idx: number): (target: readonly T[]) => T[]
    <T>(target: readonly T[], idx: number): T[]
} = dfdlT(<T>(target: readonly T[], idx: number): T[] => {
    const offset = resolveOffset(target, idx)
    if (offset < 0) throw new Error("removeAtOrThrow: Index is out of range.")
    const result = cloneArray(target)
    result.splice(offset, 1)
    return result
}, 2)
