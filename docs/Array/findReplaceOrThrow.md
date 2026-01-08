# findReplaceOrThrow

```ts
function Array.findReplaceOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    replacement: NoInfer<T>,
): readonly T[]
```

Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or throws an error if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceOrThrow([1, 2, 3, 4], (x) => x > 2, 99); // [1, 2, 99, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceOrThrow((x) => x > 2, 99),
); // [1, 2, 99, 4]
```

:::
