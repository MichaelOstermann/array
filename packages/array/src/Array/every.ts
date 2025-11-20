import type { ArrayGuard, ArrayPredicate } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.every(array, predicate)`
 *
 * Tests whether all elements in the `array` pass the test implemented by the `predicate` function. It returns `true` if all elements pass, otherwise `false`.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * const isEven = (n: number) => n % 2 === 0;
 *
 * Array.every([2, 4, 6], isEven); // true
 * Array.every([2, 4, 7], isEven); // false
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * const isEven = (n: number) => n % 2 === 0;
 *
 * pipe([2, 4, 6], Array.every(isEven)); // true
 * pipe([2, 4, 7], Array.every(isEven)); // false
 * ```
 */
export const every: {
    <T, U extends T>(predicate: ArrayGuard<T, U>): (target: readonly T[]) => target is U[]
    <T>(predicate: ArrayPredicate<T>): (target: readonly T[]) => boolean
    <T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): target is U[]
    <T>(target: readonly T[], predicate: ArrayPredicate<T>): boolean
} = dfdlT(<T, U extends T>(target: readonly T[], predicate: ArrayGuard<T, U>): target is U[] => {
    return target.every(predicate)
}, 2)
