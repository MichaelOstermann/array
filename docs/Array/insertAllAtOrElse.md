# insertAllAtOrElse

```ts
function Array.insertAllAtOrElse(
    array: T[],
    index: number,
    values: U[],
    fallback: (array: T[]) => V
): T[] | V
```

Inserts all `values` at the specified `idx` in `target`. If the index is out of bounds, calls `orElse` with the original array. Supports iterables.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAllAtOrElse([1, 2, 3], 1, [8, 9], () => []); // [1, 8, 9, 2, 3]
Array.insertAllAtOrElse([1, 2, 3], 5, [8, 9], (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.insertAllAtOrElse(1, [8, 9], () => []),
); // [1, 8, 9, 2, 3]

pipe(
    [1, 2, 3],
    Array.insertAllAtOrElse(5, [8, 9], (arr) => arr),
); // [1, 2, 3]
```

:::
