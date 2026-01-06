# lastOrThrow

```ts
function Array.lastOrThrow(array: T[]): T
```

Returns the last element of `array`, or throws an error if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.lastOrThrow([1, 2, 3, 4]); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.lastOrThrow()); // 4
```

:::
