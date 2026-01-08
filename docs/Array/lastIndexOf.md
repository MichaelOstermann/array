# lastIndexOf

```ts
function Array.lastIndexOf<T>(
    target: readonly T[],
    value: NoInfer<T>,
): number
```

Returns the last index at which `value` can be found in `array`, or -1 if it is not present.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.lastIndexOf([1, 2, 3, 2, 4], 2); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2, 4], Array.lastIndexOf(2)); // 3
```

:::
