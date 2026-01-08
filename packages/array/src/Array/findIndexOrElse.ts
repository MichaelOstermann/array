import { dfdlT } from "@monstermann/dfdl"

/**
 * # findIndexOrElse
 *
 * ```ts
 * function Array.findIndexOrElse<T, U>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 *     orElse: (target: readonly NoInfer<T>[]) => U,
 * ): number | U
 * ```
 *
 * Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, calls `orElse` with the original array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findIndexOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 2,
 *     () => -1,
 * ); // 2
 *
 * Array.findIndexOrElse(
 *     [1, 2, 3, 4],
 *     (x) => x > 5,
 *     (arr) => arr.length,
 * ); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findIndexOrElse(
 *         (x) => x > 2,
 *         () => -1,
 *     ),
 * ); // 2
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findIndexOrElse(
 *         (x) => x > 5,
 *         (arr) => arr.length,
 *     ),
 * ); // 4
 * ```
 *
 */
export const findIndexOrElse: {
    <T, U>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, orElse: (target: readonly NoInfer<T>[]) => U): (target: readonly T[]) => number | U
    <T, U>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, orElse: (target: readonly NoInfer<T>[]) => U): number | U
} = dfdlT(<T, U>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, orElse: (target: readonly NoInfer<T>[]) => U): number | U => {
    const idx = target.findIndex(predicate)
    return idx < 0 ? orElse(target) : idx
}, 3)
