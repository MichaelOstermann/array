# findOrThrow

```ts
function Array.findOrThrow(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
): T
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
