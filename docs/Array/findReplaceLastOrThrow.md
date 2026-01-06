# findReplaceLastOrThrow

```ts
function Array.findReplaceLastOrThrow(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean,
    value: U
): T[]
```

Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or throws an error if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceLastOrThrow([1, 2, 3, 4], (x) => x > 2, 99); // [1, 2, 3, 99]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceLastOrThrow((x) => x > 2, 99),
); // [1, 2, 3, 99]
```

:::
