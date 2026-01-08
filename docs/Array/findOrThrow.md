# findOrThrow

```ts
function Array.findOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): Exclude<T, null | undefined>
```

Returns the first element in `array` that satisfies the provided `predicate` function, or throws an error if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findOrThrow([1, 2, 3, 4], (x) => x > 2); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findOrThrow((x) => x > 2),
); // 3
```

:::
