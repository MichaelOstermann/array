# findReplaceLastOrElse

`Array.findReplaceLastOrElse(array, predicate, replacement, callback)`

Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or the result of calling `callback` with the array if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceLastOrElse(
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
    Array.findReplaceLastOrElse(
        (x) => x > 10,
        99,
        (arr) => arr.length,
    ),
); // 4
```

:::
