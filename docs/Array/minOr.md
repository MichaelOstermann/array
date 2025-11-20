# minOr

`Array.minOr(array, fallback)`

Returns the minimum value in the number `array`, or `fallback` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.minOr([5, 1, 3, 2], 0); // 1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([5, 1, 3, 2], Array.minOr(0)); // 1
```

:::
