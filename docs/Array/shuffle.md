# shuffle

`Array.shuffle(array)`

Returns a new array with the elements of `array` randomly shuffled.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.shuffle([1, 2, 3, 4]); // [3, 1, 4, 2] (random)
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.shuffle()); // [3, 1, 4, 2] (random)
```

:::
