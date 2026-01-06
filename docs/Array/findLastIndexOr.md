# findLastIndexOr

```ts
function Array.findLastIndexOr(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean,
    fallback: U
): number | U
```

Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, returns `or`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastIndexOr([1, 3, 2, 4], (x) => x > 2, -1); // 3
Array.findLastIndexOr([1, 2, 3, 4], (x) => x > 5, -1); // -1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 3, 2, 4],
    Array.findLastIndexOr((x) => x > 2, -1),
); // 3

pipe(
    [1, 2, 3, 4],
    Array.findLastIndexOr((x) => x > 5, -1),
); // -1
```

:::
