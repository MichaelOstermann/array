# firstOrElse

`Array.firstOrElse(array, callback)`

Returns the first element of `array`, or the result of calling `callback` with the array if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.firstOrElse([1, 2, 3, 4], (arr) => arr.length); // 1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.firstOrElse((arr) => arr.length),
); // 1
```

:::
