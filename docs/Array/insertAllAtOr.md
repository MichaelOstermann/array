# insertAllAtOr

```ts
function Array.insertAllAtOr(
    array: T[],
    index: number,
    values: U[],
    fallback: V
): T[] | V
```

Inserts all `values` at the specified `idx` in `target`. If the index is out of bounds, returns `or`. Supports iterables.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAllAtOr([1, 2, 3], 1, [8, 9], []); // [1, 8, 9, 2, 3]
Array.insertAllAtOr([1, 2, 3], 5, [8, 9], []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.insertAllAtOr(1, [8, 9], [])); // [1, 8, 9, 2, 3]
pipe([1, 2, 3], Array.insertAllAtOr(5, [8, 9], [])); // []
```

:::
