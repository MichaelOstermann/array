# replaceLastOrThrow

```ts
function Array.replaceLastOrThrow(array: T[], oldValue: U, newValue: V): T[]
```

Replaces the last occurrence of `value` in `target` with `replacement`. If `value` is not found, throws an error.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceLastOrThrow([1, 2, 3, 2], 2, 9); // [1, 2, 3, 9]
Array.replaceLastOrThrow([1, 2, 3], 4, 9); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.replaceLastOrThrow(2, 9)); // [1, 2, 3, 9]
pipe([1, 2, 3], Array.replaceLastOrThrow(4, 9)); // throws FnError
```

:::
