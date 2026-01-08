# findMapLast

```ts
function Array.findMapLast<T>(
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
): readonly T[]
```

Finds the last element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapLast(
    [1, 2, 3, 4],
    (x) => x > 2,
    (x) => x * 10,
); // [1, 2, 3, 40]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapLast(
        (x) => x > 2,
        (x) => x * 10,
    ),
); // [1, 2, 3, 40]
```

:::
