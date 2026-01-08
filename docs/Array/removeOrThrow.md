# removeOrThrow

```ts
function Array.removeOrThrow<T>(
    target: readonly T[],
    value: NoInfer<T>,
): T[]
```

Removes the first occurrence of `value` from `target` array. If the value is not found, throws an error.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeOrThrow([1, 2, 3, 2], 2); // [1, 3, 2]
Array.removeOrThrow([1, 2, 3], 4); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.removeOrThrow(2)); // [1, 3, 2]
pipe([1, 2, 3], Array.removeOrThrow(4)); // throws FnError
```

:::
