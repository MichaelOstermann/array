# findLastOrThrow

```ts
function Array.findLastOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): Exclude<T, null | undefined>
```

Returns the last element in `array` that satisfies the provided `predicate` function, or throws an error if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastOrThrow([1, 2, 3, 4], (x) => x > 2); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findLastOrThrow((x) => x > 2),
); // 4
```

:::
