# forEachRight

```ts
function Array.forEachRight(
    array: T[],
    callback: (value: T, index: number, array: T[]) => void
): T[]
```

Executes the provided `callback` function once for each element in `array` in reverse order and returns the original array.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.forEachRight([1, 2, 3], (x) => console.log(x)); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.forEachRight((x) => console.log(x)),
); // [1, 2, 3]
```

:::
