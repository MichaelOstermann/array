# mapAtOrElse

`Array.mapAtOrElse(array, index, mapper, callback)`

Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element, or the result of calling `callback` with the array if the index is out of bounds.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.mapAtOrElse(
    [1, 2, 3],
    10,
    (x) => x * 10,
    (arr) => arr.length,
); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.mapAtOrElse(
        10,
        (x) => x * 10,
        (arr) => arr.length,
    ),
); // 3
```

:::
