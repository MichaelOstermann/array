# removeAtOrThrow

`Array.removeAtOrThrow(target, idx)`

Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, throws an error.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeAtOrThrow([1, 2, 3], 1); // [1, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.removeAtOrThrow(1)); // [1, 3]
```

:::
