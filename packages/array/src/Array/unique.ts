import { dfdlT } from "@monstermann/dfdl"
import { markAsMutable } from "@monstermann/remmi"

/**
 * `Array.unique(target)`
 *
 * Returns a new array with only the unique elements from `target`, preserving the order of first occurrence.
 *
 * ## Example
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * Array.unique([1, 2, 2, 3, 1]); // [1, 2, 3]
 * ```
 *
 * ```ts
 * import { Array } from "@monstermann/array";
 *
 * pipe([1, 2, 2, 3, 1], Array.unique()); // [1, 2, 3]
 * ```
 */
export const unique: {
    (): <T>(target: T[]) => T[]
    (): <T>(target: readonly T[]) => readonly T[]

    <T>(target: T[]): T[]
    <T>(target: readonly T[]): readonly T[]
} = dfdlT(<T>(target: T[]): T[] => {
    const set = new Set(target)
    return set.size === target.length
        ? target
        : markAsMutable(Array.from(set))
}, 1)
