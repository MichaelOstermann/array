# findIndexOr

`Array.findIndexOr(target, predicate, or)`

Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, returns `or`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findIndexOr([1, 2, 3, 4], (x) => x > 2, -1); // 2
Array.findIndexOr([1, 2, 3, 4], (x) => x > 5, -1); // -1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findIndexOr((x) => x > 2, -1),
); // 2

pipe(
    [1, 2, 3, 4],
    Array.findIndexOr((x) => x > 5, -1),
); // -1
```

:::
