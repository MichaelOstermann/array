# findLastOrElse

```ts
function Array.findLastOrElse<T, V>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    orElse: (target: readonly NoInfer<T>[]) => V,
): Exclude<T, null | undefined> | V
```

Returns the last element in `array` that satisfies the provided `predicate` function, or the result of calling `callback` with the array if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findLastOrElse(
        (x) => x > 10,
        (arr) => arr.length,
    ),
); // 4
```

:::
