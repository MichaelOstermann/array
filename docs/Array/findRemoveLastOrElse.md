# findRemoveLastOrElse

```ts
function Array.findRemoveLastOrElse(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean,
    fallback: (array: T[]) => U
): T[] | U
```

Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or the result of calling `callback` with the array if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findRemoveLastOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findRemoveLastOrElse(
        (x) => x > 10,
        (arr) => arr.length,
    ),
); // 4
```

:::
