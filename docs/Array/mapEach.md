# mapEach

```ts
function Array.mapEach<T, U>(
    target: readonly T[],
    mapper: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => U,
): readonly U[]
```

Applies the `mapper` function to each element in `array`, returning a new array with the mapped elements.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.mapEach([1, 2, 3, 4], (x) => x * 2); // [2, 4, 6, 8]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.mapEach((x) => x * 2),
); // [2, 4, 6, 8]
```

:::
