# atOr

`Array.atOr(array, offset, fallback)`

Returns the value at the specified `offset`. Returns `fallback` if the `offset` was out of range, or the retrieved value was nullable.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.atOr([1, null], -1, 2); // 2
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, null], Array.atOr(-1, 2)); // 2
```

:::
