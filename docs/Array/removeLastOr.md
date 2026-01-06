# removeLastOr

```ts
function Array.removeLastOr(array: T[], value: U, fallback: V): T[] | V
```

Removes the last occurrence of `value` from `target` array. If the value is not found, returns the fallback value `or`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeLastOr([1, 2, 3, 2], 2, []); // [1, 2, 3]
Array.removeLastOr([1, 2, 3], 4, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.removeLastOr(2, [])); // [1, 2, 3]
pipe([1, 2, 3], Array.removeLastOr(4, [])); // []
```

:::
