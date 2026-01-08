import { dfdlT } from "@monstermann/dfdl"

/**
 * # is
 *
 * ```ts
 * function Array.is(target: unknown): target is readonly unknown[]
 * ```
 *
 * Returns `true` if `value` is an array, otherwise returns `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Array } from "@monstermann/array";
 *
 * Array.is([1, 2, 3]); // true
 * ```
 *
 * ```ts [data-last]
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3], Array.is()); // true
 * ```
 *
 */
export const is: {
    (): (target: unknown) => target is readonly unknown[]
    (target: unknown): target is readonly unknown[]
} = dfdlT((target: unknown): target is readonly unknown[] => {
    return Array.isArray(target)
}, 1)
