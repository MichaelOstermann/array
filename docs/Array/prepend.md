# prepend

`Array.prepend(array, value)`

Adds `value` to the beginning of `array`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.prepend([2, 3, 4], 1); // [1, 2, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([2, 3, 4], Array.prepend(1)); // [1, 2, 3, 4]
```

:::
