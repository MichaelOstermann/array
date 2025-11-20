# removeLastOrThrow

`Array.removeLastOrThrow(target, value)`

Removes the last occurrence of `value` from `target` array. If the value is not found, throws an error.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeLastOrThrow([1, 2, 3, 2], 2); // [1, 2, 3]
Array.removeLastOrThrow([1, 2, 3], 4); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.removeLastOrThrow(2)); // [1, 2, 3]
pipe([1, 2, 3], Array.removeLastOrThrow(4)); // throws FnError
```

:::
