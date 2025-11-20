# medianOrElse

`Array.medianOrElse(array, orElse)`

Returns the median value from `array`, or calls `orElse` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.medianOrElse([1, 3, 5], () => 0); // 3
Array.medianOrElse([1, 2, 3, 4], () => 0); // 2.5
Array.medianOrElse([], () => 0); // 0
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 3, 5],
    Array.medianOrElse(() => 0),
); // 3

pipe(
    [1, 2, 3, 4],
    Array.medianOrElse(() => 0),
); // 2.5

pipe(
    [],
    Array.medianOrElse(() => 0),
); // 0
```

:::
