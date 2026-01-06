import { dfdlT } from "@monstermann/dfdl"

/**
 * # reduce
 *
 * ```ts
 * function Array.reduce(
 *     array: T[],
 *     reducer: (acc: U, value: T, index: number, array: T[]) => U,
 *     initial: U
 * ): U
 * ```
 *
 * Reduces `array` to a single value by executing the `reducer` function on each element, starting with the `initial` accumulator value.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.reduce([1, 2, 3, 4], 0, (acc, x) => acc + x); // 10
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.reduce(0, (acc, x) => acc + x),
 * ); // 10
 * ```
 *
 */
export const reduce: {
    <T, U>(
        acc: U,
        reducer: (acc: NoInfer<U>, value: NoInfer<T>, idx: number, target: readonly NoInfer<T>[]) => NoInfer<U>
    ): (target: readonly T[]) => U

    <T, U>(
        target: readonly T[],
        acc: U,
        reducer: (acc: NoInfer<U>, value: NoInfer<T>, idx: number, target: readonly NoInfer<T>[]) => NoInfer<U>
    ): U
} = dfdlT(<T, U>(
    target: readonly T[],
    acc: U,
    reducer: (acc: NoInfer<U>, value: NoInfer<T>, idx: number, target: readonly NoInfer<T>[]) => NoInfer<U>,
): U => {
    return target.reduce(reducer, acc)
}, 3)
