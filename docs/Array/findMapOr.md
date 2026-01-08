# findMapOr

```ts
function Array.findMapOr<T, V>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    mapper: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
    or: V,
): readonly T[] | V
```

Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or `fallback` if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapOr(
    [1, 2, 3, 4],
    (x) => x > 10,
    (x) => x * 10,
    [],
); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapOr(
        (x) => x > 10,
        (x) => x * 10,
        [],
    ),
); // []
```

:::
