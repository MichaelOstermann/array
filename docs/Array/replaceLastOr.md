# replaceLastOr

```ts
function Array.replaceLastOr<T, U>(
    target: readonly T[],
    value: NoInfer<T>,
    replacement: NoInfer<T>,
    or: U,
): readonly T[] | U
```

Replaces the last occurrence of `value` with `replacement` in `target` array. If the value is not found, returns the fallback value `or`. If value and replacement are the same, returns the original array unchanged.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceLastOr([1, 2, 3, 2], 2, 5, []); // [1, 2, 3, 5]
Array.replaceLastOr([1, 2, 3], 4, 5, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.replaceLastOr(2, 5, [])); // [1, 2, 3, 5]
pipe([1, 2, 3], Array.replaceLastOr(4, 5, [])); // []
```

:::
