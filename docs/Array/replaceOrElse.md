# replaceOrElse

```ts
function Array.replaceOrElse(
    array: T[],
    oldValue: U,
    newValue: V,
    fallback: (array: T[]) => W
): T[] | W
```

Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, calls `orElse` with the original array.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceOrElse([1, 2, 3, 2], 2, 9, () => []); // [1, 9, 3, 2]
Array.replaceOrElse([1, 2, 3], 4, 9, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 2],
    Array.replaceOrElse(2, 9, () => []),
); // [1, 9, 3, 2]

pipe(
    [1, 2, 3],
    Array.replaceOrElse(4, 9, (arr) => arr),
); // [1, 2, 3]
```

:::
