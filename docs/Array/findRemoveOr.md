# findRemoveOr

```ts
function Array.findRemoveOr(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean,
    fallback: U
): T[] | U
```

Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or `fallback` if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findRemoveOr([1, 2, 3, 4], (x) => x > 10, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findRemoveOr((x) => x > 10, []),
); // []
```

:::
