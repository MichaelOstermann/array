# findRemove

`Array.findRemove(array, predicate)`

Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findRemove([1, 2, 3, 4], (x) => x > 2); // [1, 2, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findRemove((x) => x > 2),
); // [1, 2, 4]
```

:::
