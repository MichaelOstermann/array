import { dfdlT } from "@monstermann/dfdl"

/**
 * # find
 *
 * ```ts
 * function Array.find<T>(
 *     target: T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 * ): T | undefined
 * ```
 *
 * Returns the first element in `array` that satisfies the provided `predicate` function, or `undefined` if no element is found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.find([1, 2, 3, 4], (x) => x > 2); // 3
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.find((x) => x > 2),
 * ); // 3
 * ```
 *
 */
export const find: {
    <T, U extends T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): (target: readonly T[]) => U | undefined
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): (target: readonly T[]) => T | undefined
    <T, U extends T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): U | undefined
    <T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean): T | undefined
} = dfdlT(<T, U extends T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U): U | undefined => {
    return target.find(predicate)
}, 2)
