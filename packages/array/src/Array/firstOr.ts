import { dfdlT } from "@monstermann/dfdl"

/**
 * # firstOr
 *
 * ```ts
 * function Array.firstOr<T, U>(
 *     target: readonly T[],
 *     or: U,
 * ): Exclude<T, null | undefined> | U
 * ```
 *
 * Returns the first element of `array`, or `fallback` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.firstOr([1, 2, 3, 4], 0); // 1
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.firstOr(0)); // 1
 * ```
 *
 */
export const firstOr: {
    <T, U>(or: U): (target: readonly T[]) => Exclude<T, null | undefined> | U
    <T, U>(target: readonly T[], or: U): Exclude<T, null | undefined> | U
} = dfdlT(<T, U>(target: readonly T[], or: U): any => {
    return target[0] ?? or
}, 2)
