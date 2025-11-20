# last

`Array.last(array)`

Returns the last element of `array`, or `undefined` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.last([1, 2, 3, 4]); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.last()); // 4
```

:::
