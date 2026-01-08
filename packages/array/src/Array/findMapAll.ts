import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * # findMapAll
 *
 * ```ts
 * function Array.findMapAll<T>(
 *     target: readonly T[],
 *     predicate: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => boolean,
 *     mapper: (
 *         value: NoInfer<T>,
 *         index: number,
 *         target: readonly NoInfer<T>[],
 *     ) => T,
 * ): readonly T[]
 * ```
 *
 * Finds all elements in `array` that satisfy the provided `predicate` function and applies the `mapper` function to each of them, returning a new array with the mapped elements.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.findMapAll(
 *     [1, 2, 3, 4],
 *     (x) => x > 2,
 *     (x) => x * 10,
 * ); // [1, 2, 30, 40]
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe(
 *     [1, 2, 3, 4],
 *     Array.findMapAll(
 *         (x) => x > 2,
 *         (x) => x * 10,
 *     ),
 * ); // [1, 2, 30, 40]
 * ```
 *
 */
export const findMapAll: {
    <T, U extends T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): (target: T[]) => T[]
    <T, U extends T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): (target: readonly T[]) => readonly T[]

    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): (target: T[]) => T[]
    <T>(predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): (target: readonly T[]) => readonly T[]

    <T, U extends T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): T[]
    <T, U extends T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): readonly T[]

    <T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): T[]
    <T>(target: readonly T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => boolean, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): readonly T[]
} = dfdlT(<T, U extends T>(target: T[], predicate: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => value is U, mapper: (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]) => T): T[] => {
    let result
    for (let i = 0; i < target.length; i++) {
        const prev = target[i]!
        if (!predicate(prev, i, target)) continue
        const next = mapper(prev, i, target)
        if (prev === next) continue
        result ??= cloneArray(target)
        result[i] = next
    }
    return result ?? target
}, 3)
