import type { NonNil, OrElse } from "./internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.atOrElse(array, offset, fallback)`
 *
 * Returns the value at the specified `offset`. Calls `fallback` if the `offset` was out of range, or the retrieved value was nullable.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.atOrElse([1, null], -1, (array) => array.length); // 2
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, null],
 *     Array.atOrElse(-1, (array) => array.length),
 * ); // 2
 * ```
 */
export const atOrElse: {
    <T, U>(offset: number, orElse: OrElse<T, U>): (target: readonly T[]) => NonNil<T> | U
    <T, U>(target: readonly T[], offset: number, orElse: OrElse<T, U>): NonNil<T> | U
} = dfdlT(<T, U>(target: readonly T[], offset: number, orElse: OrElse<T, U>): NonNil<T> | U => {
    return target.at(offset) as NonNil<T> ?? orElse(target)
}, 3)
