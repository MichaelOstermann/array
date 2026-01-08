# randomOrElse

```ts
function Array.randomOrElse<T, U>(
    target: readonly T[],
    orElse: (target: readonly NoInfer<T>[]) => U,
): T | U
```

Returns a random element from `array`, or the result of calling `callback` with the array if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.randomOrElse([1, 2, 3, 4], (arr) => arr.length); // 2 (random)
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.randomOrElse((arr) => arr.length),
); // 2 (random)
```

:::
