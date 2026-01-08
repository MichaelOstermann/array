# maxOr

```ts
function Array.maxOr<T>(
    target: readonly number[],
    or: T,
): number | T
```

Returns the maximum value in the number `array`, or `fallback` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.maxOr([1, 3, 2, 5], 0); // 5
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 3, 2, 5], Array.maxOr(0)); // 5
```

:::
