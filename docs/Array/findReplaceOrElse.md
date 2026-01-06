# findReplaceOrElse

```ts
function Array.findReplaceOrElse(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean,
    value: U,
    fallback: (array: T[]) => V
): T[] | V
```

Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or the result of calling `callback` with the array if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    99,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceOrElse(
        (x) => x > 10,
        99,
        (arr) => arr.length,
    ),
); // 4
```

:::
