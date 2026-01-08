# insertAtOrElse

```ts
function Array.insertAtOrElse<T, U>(
    target: readonly T[],
    idx: number,
    value: NoInfer<T>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): T[] | U
```

Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or the result of calling `callback` with the array if the index is out of bounds.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAtOrElse([1, 2, 3], 10, 99, (arr) => arr.length); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.insertAtOrElse(10, 99, (arr) => arr.length),
); // 3
```

:::
