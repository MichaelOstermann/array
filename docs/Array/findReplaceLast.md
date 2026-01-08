# findReplaceLast

```ts
function Array.findReplaceLast<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    replacement: NoInfer<T>,
): readonly T[]
```

Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceLast([1, 2, 3, 4], (x) => x > 2, 10); // [1, 2, 3, 10]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceLast((x) => x > 2, 10),
); // [1, 2, 3, 10]
```

:::
