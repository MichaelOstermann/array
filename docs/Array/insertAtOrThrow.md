# insertAtOrThrow

```ts
function Array.insertAtOrThrow<T>(
    target: readonly T[],
    idx: number,
    value: NoInfer<T>,
): T[]
```

Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or throws an error if the index is out of bounds.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAtOrThrow([1, 2, 3], 1, 10); // [1, 10, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.insertAtOrThrow(1, 10)); // [1, 10, 2, 3]
```

:::
