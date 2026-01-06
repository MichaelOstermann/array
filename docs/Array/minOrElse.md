# minOrElse

```ts
function Array.minOrElse(
    array: number[],
    fallback: (array: number[]) => U
): number | U
```

Returns the minimum value from `target` array, or calls `orElse` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.minOrElse([5, 2, 8, 1], () => 0); // 1
Array.minOrElse([], () => 0); // 0
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [5, 2, 8, 1],
    Array.minOrElse(() => 0),
); // 1

pipe(
    [],
    Array.minOrElse(() => 0),
); // 0
```

:::
