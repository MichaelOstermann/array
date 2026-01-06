# atOrThrow

```ts
function Array.atOrThrow(array: T[], offset: number): T
```

Returns the value at the specified `offset`, throws an exception if the `offset` was out of range, or the retrieved value was nullable.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.atOrThrow([1, null], -1); // Error
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, null], Array.atOrThrow(-1)); // Error
```

:::
