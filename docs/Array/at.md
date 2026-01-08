# at

```ts
function Array.at<T>(
    target: readonly T[],
    offset: number,
): T | undefined
```

Returns the value at the specified `offset`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.at([1, 2, 3], -1); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.at(-1)); // 3
```

:::
