import type { OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.lastIndexOfOrElse(target, value, orElse)`
 *
 * Returns the index of the last occurrence of `value` in `target`. If `value` is not found, calls `orElse` with the original array.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.lastIndexOfOrElse([1, 2, 3, 2], 2, () => -1); // 3
 * Array.lastIndexOfOrElse([1, 2, 3], 4, (arr) => arr.length); // 3
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 2],
 *     Array.lastIndexOfOrElse(2, () => -1),
 * ); // 3
 * pipe(
 *     [1, 2, 3],
 *     Array.lastIndexOfOrElse(4, (arr) => arr.length),
 * ); // 3
 * ```
 */
export const lastIndexOfOrElse: {
    <T, U>(value: NoInfer<T>, orElse: OrElse<T, U>): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], value: NoInfer<T>, orElse: OrElse<T, U>): number | U
} = dfdlT(<T, U>(target: readonly T[], value: NoInfer<T>, orElse: OrElse<T, U>): number | U => {
    const idx = target.lastIndexOf(value)
    return idx < 0 ? orElse(target) : idx
}, 3)
