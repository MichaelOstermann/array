# removeAtOr

`Array.removeAtOr(target, idx, or)`

Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, returns the fallback value `or`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeAtOr([1, 2, 3], 1, []); // [1, 3]
Array.removeAtOr([1, 2, 3], 5, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.removeAtOr(1, [])); // [1, 3]
pipe([1, 2, 3], Array.removeAtOr(5, [])); // []
```

:::
