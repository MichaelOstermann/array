import { dfdlT } from "@monstermann/dfdl"

/**
 * # forEachRight
 *
 * ```ts
 * function Array.forEachRight<T>(
 *     target: readonly T[],
 *     callback: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => any,
 * ): readonly T[]
 * ```
 *
 * Executes the provided `callback` function once for each element in `array` in reverse order and returns the original array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.forEachRight([1, 2, 3], (x) => console.log(x)); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3],
 *     Array.forEachRight((x) => console.log(x)),
 * ); // [1, 2, 3]
 * ```
 *
 */
export const forEachRight: {
    <T>(callback: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => any): (target: T[]) => T[]
    <T>(callback: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => any): (target: readonly T[]) => readonly T[]

    <T>(target: T[], callback: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => any): T[]
    <T>(target: readonly T[], callback: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => any): readonly T[]
} = dfdlT(<T>(target: T[], callback: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => any): T[] => {
    let i = target.length
    while (i--) callback(target[i]!, i, target)
    return target
}, 2)
