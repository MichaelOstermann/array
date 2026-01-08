# findMapOrThrow

```ts
function Array.findMapOrThrow<T>(
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

Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or throws an error if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapOrThrow(
    [1, 2, 3, 4],
    (x) => x > 2,
    (x) => x * 10,
); // [1, 2, 30, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapOrThrow(
        (x) => x > 2,
        (x) => x * 10,
    ),
); // [1, 2, 30, 4]
```

:::
