# findRemoveLast

```ts
function Array.findRemoveLast<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): readonly T[]
```

Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findRemoveLast([1, 2, 3, 4], (x) => x > 2); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findRemoveLast((x) => x > 2),
); // [1, 2, 3]
```

:::
