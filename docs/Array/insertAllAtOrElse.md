# insertAllAtOrElse

```ts
function Array.insertAllAtOrElse<T, U>(
    target: readonly T[],
    idx: number,
    values: Iterable<NoInfer<T>>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): readonly T[] | U
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
