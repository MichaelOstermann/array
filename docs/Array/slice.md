# slice

```ts
function Array.slice<T>(
    target: readonly T[],
    start: number,
    end?: number,
): T[]
```

Extracts a section of `target` array from `start` index to `end` index (exclusive). If `end` is not provided, extracts to the end of the array.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.slice([1, 2, 3, 4, 5], 1, 4); // [2, 3, 4]
Array.slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
Array.slice([1, 2, 3, 4, 5], -2); // [4, 5]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4, 5], Array.slice(1, 4)); // [2, 3, 4]
pipe([1, 2, 3, 4, 5], Array.slice(2)); // [3, 4, 5]
pipe([1, 2, 3, 4, 5], Array.slice(-2)); // [4, 5]
```

:::
