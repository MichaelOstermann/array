# meanOrElse

```ts
function Array.meanOrElse(
    array: number[],
    fallback: (array: number[]) => U
): number | U
```

Returns the mean (average) value from `array`, or calls `orElse` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.meanOrElse([1, 2, 3], () => 0); // 2
Array.meanOrElse([], () => 0); // 0
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.meanOrElse(() => 0),
); // 2

pipe(
    [],
    Array.meanOrElse(() => 0),
); // 0
```

:::
