# atOrElse

`Array.atOrElse(array, offset, fallback)`

Returns the value at the specified `offset`. Calls `fallback` if the `offset` was out of range, or the retrieved value was nullable.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.atOrElse([1, null], -1, (array) => array.length); // 2
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, null],
    Array.atOrElse(-1, (array) => array.length),
); // 2
```

:::
