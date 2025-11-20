# replaceLastOrElse

`Array.replaceLastOrElse(target, value, replacement, orElse)`

Replaces the last occurrence of `value` in `target` with `replacement`. If `value` is not found, calls `orElse` with the original array.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceLastOrElse([1, 2, 3, 2], 2, 9, () => []); // [1, 2, 3, 9]
Array.replaceLastOrElse([1, 2, 3], 4, 9, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 2],
    Array.replaceLastOrElse(2, 9, () => []),
); // [1, 2, 3, 9]

pipe(
    [1, 2, 3],
    Array.replaceLastOrElse(4, 9, (arr) => arr),
); // [1, 2, 3]
```

:::
