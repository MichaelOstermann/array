# mapAtOr

```ts
function Array.mapAtOr<T, U>(
    target: readonly T[],
    idx: number,
    map: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
    or: U,
): readonly T[] | U
```

Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element, or `fallback` if the index is out of bounds.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.mapAtOr([1, 2, 3], 10, (x) => x * 10, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.mapAtOr(10, (x) => x * 10, []),
); // []
```

:::
