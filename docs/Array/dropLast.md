# dropLast

```ts
function Array.dropLast(array: T[], amount: number): T[]
```

Removes `amount` of elements from the end of the `target` array.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.dropLast([1, 2, 3, 4, 5], 2); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4, 5], Array.dropLast(2)); // [1, 2, 3]
```

:::
