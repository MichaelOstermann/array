# insertAllAtOrThrow

```ts
function Array.insertAllAtOrThrow<T>(
    target: readonly T[],
    idx: number,
    values: Iterable<NoInfer<T>>,
): readonly T[]
```

Inserts all `values` at the specified `idx` in `target`. If the index is out of bounds, throws an error. Supports iterables.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAllAtOrThrow([1, 2, 3], 1, [8, 9]); // [1, 8, 9, 2, 3]
Array.insertAllAtOrThrow([1, 2, 3], 5, [8, 9]); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.insertAllAtOrThrow(1, [8, 9])); // [1, 8, 9, 2, 3]
pipe([1, 2, 3], Array.insertAllAtOrThrow(5, [8, 9])); // throws FnError
```

:::
