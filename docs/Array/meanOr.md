# meanOr

```ts
function Array.meanOr(
    target: readonly number[],
    or: number,
): number
```

Returns the mean (average) value of the number `array`, or `fallback` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.meanOr([1, 2, 3, 4], 0); // 2.5
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.meanOr(0)); // 2.5
```

:::
