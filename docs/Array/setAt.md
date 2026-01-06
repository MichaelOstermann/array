# setAt

```ts
function Array.setAt(array: T[], index: number, value: U): T[]
```

Sets the value at the specified `idx` in `target` to `value`. Returns the original array if the index is out of bounds or the value is already the same.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.setAt([1, 2, 3], 1, 9); // [1, 9, 3]
Array.setAt([1, 2, 3], -1, 9); // [1, 2, 9]
Array.setAt([1, 2, 3], 5, 9); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.setAt(1, 9)); // [1, 9, 3]
pipe([1, 2, 3], Array.setAt(-1, 9)); // [1, 2, 9]
pipe([1, 2, 3], Array.setAt(5, 9)); // [1, 2, 3]
```

:::
