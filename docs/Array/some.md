# some

```ts
function Array.some<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): boolean
```

Returns `true` if at least one element in `array` satisfies the provided `predicate` function, otherwise returns `false`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.some([1, 2, 3, 4], (x) => x > 3); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.some((x) => x > 3),
); // true
```

:::
