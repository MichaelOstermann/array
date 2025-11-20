# sum

`Array.sum(array)`

Returns the sum of all numbers in `array`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.sum([1, 2, 3, 4]); // 10
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.sum()); // 10
```

:::
