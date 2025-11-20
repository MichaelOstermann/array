# indexOfOr

`Array.indexOfOr(target, value, or)`

Returns the index of the first occurrence of `value` in `target`. If `value` is not found, returns `or`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.indexOfOr([1, 2, 3, 2], 2, -1); // 1
Array.indexOfOr([1, 2, 3], 4, -1); // -1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.indexOfOr(2, -1)); // 1
pipe([1, 2, 3], Array.indexOfOr(4, -1)); // -1
```

:::
