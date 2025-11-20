# findLastOr

`Array.findLastOr(array, predicate, fallback)`

Returns the last element in `array` that satisfies the provided `predicate` function, or `fallback` if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastOr([1, 2, 3, 4], (x) => x > 10, 0); // 0
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findLastOr((x) => x > 10, 0),
); // 0
```

:::
