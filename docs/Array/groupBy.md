# groupBy

```ts
function Array.groupBy(
    array: T[],
    keySelector: (value: T, index: number, array: T[]) => string
): Record<string, T[]>
```

Groups elements in `array` by the result of calling `grouper` function on each element, optionally transforming each element with `transform`, returning an object with keys as group values and values as arrays of elements.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.groupBy(
    [1, 2, 3, 4],
    (x) => (x % 2 === 0 ? "even" : "odd"),
    (x) => x * 10,
); // { even: [20, 40], odd: [10, 30] }
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.groupBy(
        (x) => (x % 2 === 0 ? "even" : "odd"),
        (x) => x * 10,
    ),
); // { even: [20, 40], odd: [10, 30] }
```

:::
