# findReplaceOr

```ts
function Array.findReplaceOr(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean,
    value: U,
    fallback: V
): T[] | V
```

Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or `fallback` if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceOr([1, 2, 3, 4], (x) => x > 10, 99, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceOr((x) => x > 10, 99, []),
); // []
```

:::
