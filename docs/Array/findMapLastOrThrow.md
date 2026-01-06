# findMapLastOrThrow

```ts
function Array.findMapLastOrThrow(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean,
    mapper: (value: T, index: number, array: T[]) => U
): T[]
```

Finds the last element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or throws an error if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapLastOrThrow(
    [1, 2, 3, 4],
    (x) => x > 2,
    (x) => x * 10,
); // [1, 2, 3, 40]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapLastOrThrow(
        (x) => x > 2,
        (x) => x * 10,
    ),
); // [1, 2, 3, 40]
```

:::
