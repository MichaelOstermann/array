# findRemoveOrThrow

```ts
function Array.findRemoveOrThrow(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
): T[]
```

Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or throws an error if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findRemoveOrThrow([1, 2, 3, 4], (x) => x > 2); // [1, 2, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findRemoveOrThrow((x) => x > 2),
); // [1, 2, 4]
```

:::
