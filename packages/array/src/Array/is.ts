import { dfdlT } from "@monstermann/dfdl"

/**
 * `Array.is(value)`
 *
 * Returns `true` if `value` is an array, otherwise returns `false`.
 *
 * ## Example
 *
 * ```ts
 */
export const is: {
    (): (target: unknown) => target is readonly unknown[]
    (target: unknown): target is readonly unknown[]
} = dfdlT((target: unknown): target is readonly unknown[] => {
    return Array.isArray(target)
}, 1)
