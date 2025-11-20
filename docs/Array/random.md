# random

`Array.random(array)`

Returns a random element from `array`, or `undefined` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.random([1, 2, 3, 4]); // 2 (random)
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.random()); // 2 (random)
```

:::
