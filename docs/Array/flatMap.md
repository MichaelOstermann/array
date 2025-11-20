# flatMap

`Array.flatMap(array, mapper)`

Maps each element in `array` using the `mapper` function and flattens the result by one level.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.flatMap([1, 2, 3], (x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.flatMap((x) => [x, x * 2]),
); // [1, 2, 2, 4, 3, 6]
```

:::
