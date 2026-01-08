import { dfdlT } from "@monstermann/dfdl"

/**
 * # randomOr
 *
 * ```ts
 * function Array.randomOr<T, U>(target: readonly T[], or: U): T | U
 * ```
 *
 * Returns a random element from `array`, or `fallback` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.randomOr([1, 2, 3, 4], 0); // 2 (random)
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.randomOr(0)); // 2 (random)
 * ```
 *
 */
export const randomOr: {
    <T, U>(or: U): (target: readonly T[]) => T | U
    <T, U>(target: readonly T[], or: U): T | U
} = dfdlT(<T, U>(target: readonly T[], or: U): T | U => {
    if (target.length === 0) return or
    const idx = Math.floor(Math.random() * target.length)
    return target[idx]!
}, 2)
