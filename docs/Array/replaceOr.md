# replaceOr

```ts
function Array.replaceOr<T, U>(
    target: readonly T[],
    value: NoInfer<T>,
    replacement: NoInfer<T>,
    or: U,
): readonly T[] | U
```

Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, returns `or`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceOr([1, 2, 3, 2], 2, 9, []); // [1, 9, 3, 2]
Array.replaceOr([1, 2, 3], 4, 9, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.replaceOr(2, 9, [])); // [1, 9, 3, 2]
pipe([1, 2, 3], Array.replaceOr(4, 9, [])); // []
```

:::
