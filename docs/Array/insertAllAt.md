# insertAllAt

`Array.insertAllAt(array, index, values)`

Inserts all elements from `values` at the specified `index` in `array`, returning a new array with the inserted elements. Supports iterables for the `values` parameter.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAllAt([1, 2, 3], 1, [10, 20]); // [1, 10, 20, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.insertAllAt(1, [10, 20])); // [1, 10, 20, 2, 3]
```

:::
