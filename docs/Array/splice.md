# splice

```ts
function Array.splice<T>(
    target: readonly T[],
    start: number,
    deleteCount: number,
    items?: Iterable<NoInfer<T>>,
): T[]
```

Removes `deleteCount` elements from `target` starting at `start` index and optionally inserts new `items` in their place.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.splice([1, 2, 3, 4, 5], 1, 2); // [1, 4, 5]
Array.splice([1, 2, 3, 4, 5], 1, 2, [10, 20]); // [1, 10, 20, 4, 5]
Array.splice([1, 2, 3, 4, 5], -2, 1); // [1, 2, 3, 5]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4, 5], Array.splice(1, 2)); // [1, 4, 5]
pipe([1, 2, 3, 4, 5], Array.splice(1, 2, [10, 20])); // [1, 10, 20, 4, 5]
pipe([1, 2, 3, 4, 5], Array.splice(-2, 1)); // [1, 2, 3, 5]
```

:::
