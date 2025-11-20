# first

`Array.first(array)`

Returns the first element of `array`, or `undefined` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.first([1, 2, 3, 4]); // 1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.first()); // 1
```

:::
