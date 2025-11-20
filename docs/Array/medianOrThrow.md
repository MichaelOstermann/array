# medianOrThrow

`Array.medianOrThrow(array)`

Returns the median value from `array`, or throws an error if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.medianOrThrow([1, 3, 5]); // 3
Array.medianOrThrow([1, 2, 3, 4]); // 2.5
Array.medianOrThrow([]); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 3, 5], Array.medianOrThrow()); // 3
pipe([1, 2, 3, 4], Array.medianOrThrow()); // 2.5
pipe([], Array.medianOrThrow()); // throws FnError
```

:::
