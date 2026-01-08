# firstOr

```ts
function Array.firstOr<T, U>(
    target: readonly T[],
    or: U,
): Exclude<T, null | undefined> | U
```

Returns the first element of `array`, or `fallback` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.firstOr([1, 2, 3, 4], 0); // 1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.firstOr(0)); // 1
```

:::
