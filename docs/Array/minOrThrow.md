# minOrThrow

```ts
function Array.minOrThrow(target: readonly number[]): number
```

Returns the minimum value from `target` array, or throws an error if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.minOrThrow([5, 2, 8, 1]); // 1
Array.minOrThrow([]); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([5, 2, 8, 1], Array.minOrThrow()); // 1
pipe([], Array.minOrThrow()); // throws FnError
```

:::
