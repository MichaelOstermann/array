# lastOrElse

```ts
function Array.lastOrElse<T, U>(
    target: readonly T[],
    orElse: (target: readonly NoInfer<T>[]) => U,
): Exclude<T, null | undefined> | U
```

Returns the last element of `array`, or the result of calling `callback` with the array if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.lastOrElse([1, 2, 3, 4], (arr) => arr.length); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.lastOrElse((arr) => arr.length),
); // 4
```

:::
