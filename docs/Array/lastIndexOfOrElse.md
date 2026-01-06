# lastIndexOfOrElse

```ts
function Array.lastIndexOfOrElse(
    array: T[],
    value: T,
    fallback: (array: T[]) => U
): number | U
```

Returns the index of the last occurrence of `value` in `target`. If `value` is not found, calls `orElse` with the original array.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.lastIndexOfOrElse([1, 2, 3, 2], 2, () => -1); // 3
Array.lastIndexOfOrElse([1, 2, 3], 4, (arr) => arr.length); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 2],
    Array.lastIndexOfOrElse(2, () => -1),
); // 3

pipe(
    [1, 2, 3],
    Array.lastIndexOfOrElse(4, (arr) => arr.length),
); // 3
```

:::
