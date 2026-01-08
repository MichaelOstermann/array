# countBy

```ts
function Array.countBy<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): number
```

Counts the number of elements in the `target` array satisfy the provided `predicate` function.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

const isEven = (n) => n % 2 === 0;
Array.countBy([1, 2, 3, 4, 5], isEven); // 2
```

```ts [data-last]
import { Array } from "@monstermann/array";

const isEven = (n) => n % 2 === 0;
pipe([1, 2, 3, 4, 5], Array.countBy(isEven)); // 2
```

:::
