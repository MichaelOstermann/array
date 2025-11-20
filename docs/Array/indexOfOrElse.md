# indexOfOrElse

`Array.indexOfOrElse(target, value, orElse)`

Returns the index of the first occurrence of `value` in `target`. If `value` is not found, calls `orElse` with the original array.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.indexOfOrElse([1, 2, 3, 2], 2, () => -1); // 1
Array.indexOfOrElse([1, 2, 3], 4, (arr) => arr.length); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 2],
    Array.indexOfOrElse(2, () => -1),
); // 1

pipe(
    [1, 2, 3],
    Array.indexOfOrElse(4, (arr) => arr.length),
); // 3
```

:::
