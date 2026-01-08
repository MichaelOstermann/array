# findLastIndex

```ts
function Array.findLastIndex<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): number
```

Returns the index of the last element in `array` that satisfies the provided `predicate` function, or -1 if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastIndex([1, 2, 3, 4], (x) => x > 2); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findLastIndex((x) => x > 2),
); // 3
```

:::
