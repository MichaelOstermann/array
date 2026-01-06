# findLast

```ts
function Array.findLast(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
): T | undefined
```

Returns the last element in `array` that satisfies the provided `predicate` function, or `undefined` if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLast([1, 2, 3, 4], (x) => x > 2); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findLast((x) => x > 2),
); // 4
```

:::
