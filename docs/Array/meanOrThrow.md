# meanOrThrow

```ts
function Array.meanOrThrow(array: number[]): number
```

Returns the mean (average) value from `array`, or throws an error if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.meanOrThrow([1, 2, 3]); // 2
Array.meanOrThrow([]); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.meanOrThrow()); // 2
pipe([], Array.meanOrThrow()); // throws FnError
```

:::
