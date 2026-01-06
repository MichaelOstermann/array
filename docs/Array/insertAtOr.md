# insertAtOr

```ts
function Array.insertAtOr(array: T[], index: number, value: U, fallback: V): T[] | V
```

Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or `fallback` if the index is out of bounds.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAtOr([1, 2, 3], 10, 99, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.insertAtOr(10, 99, [])); // []
```

:::
