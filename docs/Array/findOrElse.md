# findOrElse

`Array.findOrElse(array, predicate, callback)`

Returns the first element in `array` that satisfies the provided `predicate` function, or the result of calling `callback` with the array if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findOrElse(
        (x) => x > 10,
        (arr) => arr.length,
    ),
); // 4
```

:::
