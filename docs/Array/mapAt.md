# mapAt

`Array.mapAt(array, index, mapper)`

Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.mapAt([1, 2, 3, 4], 1, (x) => x * 10); // [1, 20, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.mapAt(1, (x) => x * 10),
); // [1, 20, 3, 4]
```

:::
