# findMapAll

```ts
function Array.findMapAll(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean,
    mapper: (value: T, index: number, array: T[]) => U
): T[]
```

Finds all elements in `array` that satisfy the provided `predicate` function and applies the `mapper` function to each of them, returning a new array with the mapped elements.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapAll(
    [1, 2, 3, 4],
    (x) => x > 2,
    (x) => x * 10,
); // [1, 2, 30, 40]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapAll(
        (x) => x > 2,
        (x) => x * 10,
    ),
); // [1, 2, 30, 40]
```

:::
