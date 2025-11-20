# removeAll

`Array.removeAll(target, values)`

Removes all occurrences of each value in `values` from `target` array. If no values are found, returns the original array unchanged. Supports iterables for the values parameter.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeAll([1, 2, 3, 2, 4], [2, 4]); // [1, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2, 4], Array.removeAll([2, 4])); // [1, 3]
```

:::
