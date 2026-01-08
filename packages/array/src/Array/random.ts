import { dfdlT } from "@monstermann/dfdl"

/**
 * # random
 *
 * ```ts
 * function Array.random<T>(target: readonly T[]): T | undefined
 * ```
 *
 * Returns a random element from `array`, or `undefined` if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.random([1, 2, 3, 4]); // 2 (random)
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3, 4], Array.random()); // 2 (random)
 * ```
 *
 */
export const random: {
    (): <T>(target: readonly T[]) => T | undefined
    <T>(target: readonly T[]): T | undefined
} = dfdlT(<T>(target: readonly T[]): T | undefined => {
    const idx = Math.floor(Math.random() * target.length)
    return target[idx]
}, 1)
