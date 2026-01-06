# remove

```ts
function Array.remove(array: T[], value: U): T[]
```

Removes the first occurrence of `value` from `target` array. If the value is not found, returns the original array unchanged.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.remove([1, 2, 3, 2], 2); // [1, 3, 2]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.remove(2)); // [1, 3, 2]
```

:::
