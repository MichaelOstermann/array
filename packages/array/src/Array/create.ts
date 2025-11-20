/**
 * `Array.create(target, map?)`
 *
 * An alias for `Array.from(target, map?)`.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.create({ length: 3 }, (_, i) => i) // [0, 1, 2]
 * ```
 */
export function create<T>(target: ArrayLike<T>): T[]

export function create<T, U>(
    target: ArrayLike<T>,
    map: (v: T, k: number) => U,
): U[]

export function create<T>(target: Iterable<T> | ArrayLike<T>): T[]

export function create<T, U>(
    target: Iterable<T> | ArrayLike<T>,
    map: (v: T, k: number) => U,
): U[]

export function create(...args: any): any {
    // @ts-expect-error ignore
    return globalThis.Array.from(...args)
}
