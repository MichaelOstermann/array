# replaceOrThrow

```ts
function Array.replaceOrThrow<T>(
    target: readonly T[],
    value: NoInfer<T>,
    replacement: NoInfer<T>,
): readonly T[]
```

Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, throws an error.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceOrThrow([1, 2, 3, 2], 2, 9); // [1, 9, 3, 2]
Array.replaceOrThrow([1, 2, 3], 4, 9); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.replaceOrThrow(2, 9)); // [1, 9, 3, 2]
pipe([1, 2, 3], Array.replaceOrThrow(4, 9)); // throws FnError
```

:::
