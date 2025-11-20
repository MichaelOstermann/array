# findIndex

`Array.findIndex(array, predicate)`

Returns the index of the first element in `array` that satisfies the provided `predicate` function, or -1 if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findIndex([1, 2, 3, 4], (x) => x > 2); // 2
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findIndex((x) => x > 2),
); // 2
```

:::
