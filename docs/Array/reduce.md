# reduce

```ts
function Array.reduce(
    array: T[],
    reducer: (acc: U, value: T, index: number, array: T[]) => U,
    initial: U
): U
```

Reduces `array` to a single value by executing the `reducer` function on each element, starting with the `initial` accumulator value.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.reduce([1, 2, 3, 4], 0, (acc, x) => acc + x); // 10
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.reduce(0, (acc, x) => acc + x),
); // 10
```

:::
