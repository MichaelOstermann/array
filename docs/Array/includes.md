# includes

`Array.includes(array, value)`

Returns `true` if `array` contains `value`, otherwise returns `false`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.includes([1, 2, 3, 4], 3); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.includes(3)); // true
```

:::
