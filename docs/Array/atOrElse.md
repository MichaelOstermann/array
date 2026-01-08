# atOrElse

```ts
function Array.atOrElse<T, U>(
    target: readonly T[],
    offset: number,
    orElse: (target: readonly NoInfer<T>[]) => U,
): Exclude<T, null | undefined> | U
```

Returns the value at the specified `offset`. Calls `fallback` if the `offset` was out of range, or the retrieved value was nullable.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.atOrElse([1, null], -1, (array) => array.length); // 2
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, null],
    Array.atOrElse(-1, (array) => array.length),
); // 2
```

:::
