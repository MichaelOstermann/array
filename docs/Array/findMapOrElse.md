# findMapOrElse

```ts
function Array.findMapOrElse(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean,
    mapper: (value: T, index: number, array: T[]) => U,
    fallback: (array: T[]) => V
): T[] | V
```

Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or the result of calling `callback` with the array if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (x) => x * 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapOrElse(
        (x) => x > 10,
        (x) => x * 10,
        (arr) => arr.length,
    ),
); // 4
```

:::
