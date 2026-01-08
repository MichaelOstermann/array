# findLastIndexOrThrow

```ts
function Array.findLastIndexOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): number
```

Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, throws an error.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastIndexOrThrow([1, 3, 2, 4], (x) => x > 2); // 3
Array.findLastIndexOrThrow([1, 2, 3, 4], (x) => x > 5); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 3, 2, 4],
    Array.findLastIndexOrThrow((x) => x > 2),
); // 3

pipe(
    [1, 2, 3, 4],
    Array.findLastIndexOrThrow((x) => x > 5),
); // throws FnError
```

:::
