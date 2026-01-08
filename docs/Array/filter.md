# filter

```ts
function Array.filter<T>(
    target: readonly T[],
    by: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): readonly T[]
```

Filters elements from `target` array based on the predicate function `by`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.filter([1, 2, 3, 4], (x) => x > 2); // [3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.filter((x) => x > 2),
); // [3, 4]
```

:::
