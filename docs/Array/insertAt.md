# insertAt

```ts
function Array.insertAt<T>(
    target: readonly T[],
    idx: number,
    value: NoInfer<T>,
): readonly T[]
```

Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAt([1, 2, 3], 1, 10); // [1, 10, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.insertAt(1, 10)); // [1, 10, 2, 3]
```

:::
