import type { NonNil, OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.firstOrElse(array, callback)`
 *
 * Returns the first element of `array`, or the result of calling `callback` with the array if the array is empty.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.firstOrElse([1, 2, 3, 4], (arr) => arr.length); // 1
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.firstOrElse((arr) => arr.length),
 * ); // 1
 * ```
 */
export const firstOrElse: {
    <T, U>(orElse: OrElse<T, U>): (target: readonly T[]) => NonNil<T> | U
    <T, U>(target: readonly T[], orElse: OrElse<T, U>): NonNil<T> | U
} = dfdlT(<T, U>(target: readonly T[], orElse: OrElse<T, U>): any => {
    return target[0] ?? orElse(target)
}, 2)
