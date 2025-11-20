# findReplaceLastOr

`Array.findReplaceLastOr(array, predicate, replacement, fallback)`

Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or `fallback` if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceLastOr([1, 2, 3, 4], (x) => x > 10, 99, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceLastOr((x) => x > 10, 99, []),
); // []
```

:::
