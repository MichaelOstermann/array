# isShallowEqual

`Array.isShallowEqual(array, other)`

Returns `true` if `array` and `other` have the same length and their elements are equal using shallow comparison, otherwise returns `false`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.isShallowEqual([1, 2, 3], [1, 2, 3]); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.isShallowEqual([1, 2, 3])); // true
```

:::
