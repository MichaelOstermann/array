# removeLast

```ts
function Array.removeLast<T>(
    target: readonly T[],
    value: NoInfer<T>,
): readonly T[]
```

Removes the last occurrence of `value` from `target` array. If the value is not found, returns the original array unchanged.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeLast([1, 2, 3, 2], 2); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.removeLast(2)); // [1, 2, 3]
```

:::
