# none

```ts
function Array.none(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
): boolean
```

Returns `true` if no elements in `array` satisfy the provided `predicate` function, otherwise returns `false`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.none([1, 2, 3, 4], (x) => x > 10); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.none((x) => x > 10),
); // true
```

:::
