# setAtOrElse

```ts
function Array.setAtOrElse<T, U>(
    target: readonly T[],
    idx: number,
    value: NoInfer<T>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): readonly T[] | U
```

Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, calls `orElse` with the original array.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.setAtOrElse([1, 2, 3], 1, 9, () => []); // [1, 9, 3]
Array.setAtOrElse([1, 2, 3], -1, 9, () => []); // [1, 2, 9]
Array.setAtOrElse([1, 2, 3], 5, 9, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.setAtOrElse(1, 9, () => []),
); // [1, 9, 3]

pipe(
    [1, 2, 3],
    Array.setAtOrElse(-1, 9, () => []),
); // [1, 2, 9]

pipe(
    [1, 2, 3],
    Array.setAtOrElse(5, 9, (arr) => arr),
); // [1, 2, 3]
```

:::
