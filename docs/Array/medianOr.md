# medianOr

```ts
function Array.medianOr(array: number[], fallback: U): number | U
```

Returns the median value of the number `array`, or `fallback` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.medianOr([1, 2, 3, 4, 5], 0); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4, 5], Array.medianOr(0)); // 3
```

:::
