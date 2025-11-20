# findReplace

`Array.findReplace(array, predicate, replacement)`

Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplace([1, 2, 3, 4], (x) => x > 2, 10); // [1, 2, 10, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplace((x) => x > 2, 10),
); // [1, 2, 10, 4]
```

:::
