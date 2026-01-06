# removeAt

```ts
function Array.removeAt(array: T[], index: number): T[]
```

Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, returns the original array unchanged.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeAt([1, 2, 3, 4], 1); // [1, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.removeAt(1)); // [1, 3, 4]
```

:::
