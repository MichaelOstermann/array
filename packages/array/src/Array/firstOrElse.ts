import { dfdlT } from "@monstermann/dfdl"

/**
 * # firstOrElse
 *
 * ```ts
 * function Array.firstOrElse<T, U>(
 *     target: readonly T[],
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): Exclude<T, null | undefined> | U
 * ```
 *
 * Returns the first element of `array`, or the result of calling `callback` with the array if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.firstOrElse([1, 2, 3, 4], (arr) => arr.length); // 1
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.firstOrElse((arr) => arr.length),
 * ); // 1
 * ```
 *
 */
export const firstOrElse: {
    <T, U>(orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => Exclude<T, null | undefined> | U
    <T, U>(target: readonly T[], orElse: (target: readonly NoInfer<T>[]) => U): Exclude<T, null | undefined> | U
} = dfdlT(<T, U>(target: readonly T[], orElse: (target: readonly NoInfer<T>[]) => U): any => {
    return target[0] ?? orElse(target)
}, 2)
