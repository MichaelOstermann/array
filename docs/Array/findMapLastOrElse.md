# findMapLastOrElse

```ts
function Array.findMapLastOrElse<T, V>(
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
    orElse: (target: readonly NoInfer<T>[]) => V,
): readonly T[] | V
```

Finds the last element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or the result of calling `callback` with the array if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapLastOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (x) => x * 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapLastOrElse(
        (x) => x > 10,
        (x) => x * 10,
        (arr) => arr.length,
    ),
); // 4
```

:::
