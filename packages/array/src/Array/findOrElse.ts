import { dfdlT } from "@monstermann/dfdl"

/**
 * # findOrElse
 *
 * ```ts
 * function Array.findOrElse<T, V>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 *     orElse: (target: readonly NoInfer<T>[]) => V,
 * ): Exclude<T, null | undefined> | V
 * ```
 *
 * Returns the first element in `array` that satisfies the provided `predicate` function, or the result of calling `callback` with the array if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 10,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findOrElse(
 *         (x) => x > 10,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 *
 */
export const findOrElse: {
    <T, U extends T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, orElse: (target: readonly Exclude<T, U>[]) => V): (target: readonly T[]) => Exclude<U, null | undefined> | V
    <T, V>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, orElse: (target: readonly NoInfer<T>[]) => V): (target: readonly T[]) => Exclude<T, null | undefined> | V
    <T, U extends T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, orElse: (target: readonly Exclude<T, U>[]) => V): Exclude<U, null | undefined> | V
    <T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, orElse: (target: readonly NoInfer<T>[]) => V): Exclude<T, null | undefined> | V
} = dfdlT(<T, V>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, orElse: (target: readonly NoInfer<T>[]) => V): any => {
    return target.find(predicate) ?? orElse(target)
}, 3)
