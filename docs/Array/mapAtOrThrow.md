# mapAtOrThrow

```ts
function Array.mapAtOrThrow<T>(
    target: readonly T[],
    idx: number,
    map: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
): readonly T[]
```

Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element, or throws an error if the index is out of bounds.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.mapAtOrThrow([1, 2, 3, 4], 1, (x) => x * 10); // [1, 20, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.mapAtOrThrow(1, (x) => x * 10),
); // [1, 20, 3, 4]
```

:::
