import { dfdlT } from "@monstermann/dfdl"

/**
 * # firstOrThrow
 *
 * ```ts
 * function Array.firstOrThrow<T>(
 *     target: readonly T[],
 * ): Exclude<T, null | undefined>
 * ```
 *
 * Returns the first element of `array`, or throws an error if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.firstOrThrow([1, 2, 3, 4]); // 1
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.firstOrThrow()); // 1
 * ```
 *
 */
export const firstOrThrow: {
    (): <T>(target: readonly T[]) => Exclude<T, null | undefined>
    <T>(target: readonly T[]): Exclude<T, null | undefined>
} = dfdlT(<T>(target: readonly T[]): any => {
    const value = target[0]
    if (value != null) return value
    throw new Error("Array.firstOrThrow: No value found.")
}, 1)
