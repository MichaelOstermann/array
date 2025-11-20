# findIndexOrThrow

`Array.findIndexOrThrow(target, predicate)`

Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, throws an error.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findIndexOrThrow([1, 2, 3, 4], (x) => x > 2); // 2
Array.findIndexOrThrow([1, 2, 3, 4], (x) => x > 5); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findIndexOrThrow((x) => x > 2),
); // 2

pipe(
    [1, 2, 3, 4],
    Array.findIndexOrThrow((x) => x > 5),
); // throws FnError
```

:::
