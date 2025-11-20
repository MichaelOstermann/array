# maxOrElse

`Array.maxOrElse(array, orElse)`

Returns the maximum value from `array`, or calls `orElse` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.maxOrElse([1, 5, 3], () => 0); // 5
Array.maxOrElse([], () => 0); // 0
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 5, 3],
    Array.maxOrElse(() => 0),
); // 5

pipe(
    [],
    Array.maxOrElse(() => 0),
); // 0
```

:::
