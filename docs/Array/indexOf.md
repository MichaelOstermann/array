# indexOf

`Array.indexOf(array, value)`

Returns the first index at which `value` can be found in `array`, or -1 if it is not present.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.indexOf([1, 2, 3, 2, 4], 2); // 1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2, 4], Array.indexOf(2)); // 1
```

:::
