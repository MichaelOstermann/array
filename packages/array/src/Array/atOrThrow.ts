import type { NonNil } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # atOrThrow
 *
 * ```ts
 * function Array.atOrThrow(array: T[], offset: number): T
 * ```
 *
 * Returns the value at the specified `offset`, throws an exception if the `offset` was out of range, or the retrieved value was nullable.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.atOrThrow([1, null], -1); // Error
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, null], Array.atOrThrow(-1)); // Error
 * ```
 *
 */
export const atOrThrow: {
    (offset: number): <T>(target: readonly T[]) => NonNil<T>
    <T>(target: readonly T[], offset: number): NonNil<T>
} = dfdlT(<T>(target: readonly T[], offset: number): NonNil<T> => {
    const value = target.at(offset)
    if (value != null) return value as NonNil<T>
    throw new Error("Array.atOrThrow: No value found.")
}, 2)
