# reject

```ts
function Array.reject(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
): T[]
```

Returns a new array with elements from `array` that do not satisfy the provided `predicate` function.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.reject([1, 2, 3, 4, 5], (x) => x % 2 === 0); // [1, 3, 5]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4, 5],
    Array.reject((x) => x % 2 === 0),
); // [1, 3, 5]
```

:::
