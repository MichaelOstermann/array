# removeLastOrElse

`Array.removeLastOrElse(target, value, orElse)`

Removes the last occurrence of `value` from `target` array. If the value is not found, calls the `orElse` function with the original array and returns its result.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeLastOrElse([1, 2, 3, 2], 2, () => []); // [1, 2, 3]
Array.removeLastOrElse([1, 2, 3], 4, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 2],
    Array.removeLastOrElse(2, () => []),
); // [1, 2, 3]

pipe(
    [1, 2, 3],
    Array.removeLastOrElse(4, (arr) => arr),
); // [1, 2, 3]
```

:::
