# setAtOrThrow

```ts
function Array.setAtOrThrow(
    array: T[],
    index: number,
    value: U
): T[]
```

Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, throws an error.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.setAtOrThrow([1, 2, 3], 1, 9); // [1, 9, 3]
Array.setAtOrThrow([1, 2, 3], -1, 9); // [1, 2, 9]
Array.setAtOrThrow([1, 2, 3], 5, 9); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.setAtOrThrow(1, 9)); // [1, 9, 3]
pipe([1, 2, 3], Array.setAtOrThrow(-1, 9)); // [1, 2, 9]
pipe([1, 2, 3], Array.setAtOrThrow(5, 9)); // throws FnError
```

:::
