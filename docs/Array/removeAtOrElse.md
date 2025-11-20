# removeAtOrElse

`Array.removeAtOrElse(target, idx, orElse)`

Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, calls the `orElse` function with the original array and returns its result.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeAtOrElse([1, 2, 3], 1, () => []); // [1, 3]
Array.removeAtOrElse([1, 2, 3], 5, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.removeAtOrElse(1, () => []),
); // [1, 3]

pipe(
    [1, 2, 3],
    Array.removeAtOrElse(5, (arr) => arr),
); // [1, 2, 3]
```

:::
