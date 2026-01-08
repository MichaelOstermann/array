# findReplaceOrElse

```ts
function Array.findReplaceOrElse<T, U>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    replacement: NoInfer<T>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): readonly T[] | U
```

Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or the result of calling `callback` with the array if no element is found.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    99,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceOrElse(
        (x) => x > 10,
        99,
        (arr) => arr.length,
    ),
); // 4
```

:::
