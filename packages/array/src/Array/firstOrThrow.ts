import type { NonNil } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.firstOrThrow(array)`
 *
 * Returns the first element of `array`, or throws an error if the array is empty.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.firstOrThrow([1, 2, 3, 4]); // 1
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.firstOrThrow()); // 1
 * ```
 */
export const firstOrThrow: {
    (): <T>(target: readonly T[]) => NonNil<T>
    <T>(target: readonly T[]): NonNil<T>
} = dfdlT(<T>(target: readonly T[]): any => {
    const value = target[0]
    if (value != null) return value
    throw new Error("Array.firstOrThrow: No value found.")
}, 1)
