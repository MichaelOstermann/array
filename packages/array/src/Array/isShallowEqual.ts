import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.isShallowEqual(array, other)`
 *
 * Returns `true` if `array` and `other` have the same length and their elements are equal using shallow comparison, otherwise returns `false`.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.isShallowEqual([1, 2, 3], [1, 2, 3]); // true
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 3], Array.isShallowEqual([1, 2, 3])); // true
 * ```
 */
export const isShallowEqual: {
    <T, U extends T>(source: readonly U[]): (target: readonly T[]) => target is U[]
    <T, U extends T>(target: readonly T[], source: readonly U[]): target is U[]
} = dfdlT(<T, U extends T>(a: readonly T[], b: readonly U[]): a is U[] => {
    if (a === b || Object.is(a, b)) return true
    const len = a.length
    if (len !== b.length) return false
    for (let i = 0; i < len; i++) {
        if (a[i] !== b[i] || !Object.is(a[i], b[i])) return false
    }
    return true
}, 2)
