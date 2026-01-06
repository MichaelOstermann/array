# lastOr

```ts
function Array.lastOr(array: T[], fallback: U): T | U
```

Returns the last element of `array`, or `fallback` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.lastOr([1, 2, 3, 4], 0); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.lastOr(0)); // 4
```

:::
