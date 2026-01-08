import { dfdlT } from "@monstermann/dfdl"

/**
 * # lastOrElse
 *
 * ```ts
 * function Array.lastOrElse<T, U>(
 *     target: readonly T[],
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): Exclude<T, null | undefined> | U
 * ```
 *
 * Returns the last element of `array`, or the result of calling `callback` with the array if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.lastOrElse([1, 2, 3, 4], (arr) => arr.length); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.lastOrElse((arr) => arr.length),
 * ); // 4
 * ```
 *
 */
export const lastOrElse: {
    <T, U>(orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => Exclude<T, null | undefined> | U
    <T, U>(target: readonly T[], orElse: (target: readonly NoInfer<T>[]) => U): Exclude<T, null | undefined> | U
} = dfdlT(<T, U>(target: readonly T[], orElse: (target: readonly NoInfer<T>[]) => U): any => {
    return target.at(-1) ?? orElse(target)
}, 2)
