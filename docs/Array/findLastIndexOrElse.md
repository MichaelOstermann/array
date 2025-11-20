# findLastIndexOrElse

`Array.findLastIndexOrElse(target, predicate, orElse)`

Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, calls `orElse` with the original array.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastIndexOrElse(
    [1, 3, 2, 4],
    (x) => x > 2,
    () => -1,
); // 3

Array.findLastIndexOrElse(
    [1, 2, 3, 4],
    (x) => x > 5,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 3, 2, 4],
    Array.findLastIndexOrElse(
        (x) => x > 2,
        () => -1,
    ),
); // 3

pipe(
    [1, 2, 3, 4],
    Array.findLastIndexOrElse(
        (x) => x > 5,
        (arr) => arr.length,
    ),
); // 4
```

:::
