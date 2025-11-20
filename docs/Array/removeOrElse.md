# removeOrElse

`Array.removeOrElse(target, value, orElse)`

Removes the first occurrence of `value` from `target` array. If the value is not found, calls the `orElse` function with the original array and returns its result.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeOrElse([1, 2, 3, 2], 2, () => []); // [1, 3, 2]
Array.removeOrElse([1, 2, 3], 4, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 2],
    Array.removeOrElse(2, () => []),
); // [1, 3, 2]

pipe(
    [1, 2, 3],
    Array.removeOrElse(4, (arr) => arr),
); // [1, 2, 3]
```

:::
