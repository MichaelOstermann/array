# replaceLast

`Array.replaceLast(target, value, replacement)`

Replaces the last occurrence of `value` with `replacement` in `target` array. If the value is not found or if value and replacement are the same, returns the original array unchanged.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceLast([1, 2, 3, 2], 2, 5); // [1, 2, 3, 5]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.replaceLast(2, 5)); // [1, 2, 3, 5]
```

:::
