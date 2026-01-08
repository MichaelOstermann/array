import { dfdlT } from "@monstermann/dfdl"

/**
 * # lastOrThrow
 *
 * ```ts
 * function Array.lastOrThrow<T>(
 *     target: readonly T[],
 * ): Exclude<T, null | undefined>
 * ```
 *
 * Returns the last element of `array`, or throws an error if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.lastOrThrow([1, 2, 3, 4]); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.lastOrThrow()); // 4
 * ```
 *
 */
export const lastOrThrow: {
    (): <T>(target: readonly T[]) => Exclude<T, null | undefined>
    <T>(target: readonly T[]): Exclude<T, null | undefined>
} = dfdlT(<T>(target: readonly T[]): any => {
    const value = target.at(-1)
    if (value != null) return value
    throw new Error("Array.lastOrThrow: No value found.")
}, 1)
