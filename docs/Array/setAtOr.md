# setAtOr

```ts
function Array.setAtOr(array: T[], index: number, value: U, fallback: V): T[] | V
```

Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, returns `or`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.setAtOr([1, 2, 3], 1, 9, []); // [1, 9, 3]
Array.setAtOr([1, 2, 3], -1, 9, []); // [1, 2, 9]
Array.setAtOr([1, 2, 3], 5, 9, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.setAtOr(1, 9, [])); // [1, 9, 3]
pipe([1, 2, 3], Array.setAtOr(-1, 9, [])); // [1, 2, 9]
pipe([1, 2, 3], Array.setAtOr(5, 9, [])); // []
```

:::
