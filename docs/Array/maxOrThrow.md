# maxOrThrow

`Array.maxOrThrow(array)`

Returns the maximum value from `array`, or throws an error if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.maxOrThrow([1, 5, 3]); // 5
Array.maxOrThrow([]); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 5, 3], Array.maxOrThrow()); // 5
pipe([], Array.maxOrThrow()); // throws FnError
```

:::
