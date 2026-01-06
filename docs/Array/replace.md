# replace

```ts
function Array.replace(array: T[], oldValue: U, newValue: V): T[]
```

Replaces the first occurrence of `value` with `replacement` in `target` array. If the value is not found or if value and replacement are the same, returns the original array unchanged.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replace([1, 2, 3, 2], 2, 5); // [1, 5, 3, 2]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.replace(2, 5)); // [1, 5, 3, 2]
```

:::
