# take

```ts
function Array.take<T>(
    target: readonly T[],
    amount: number,
): readonly T[]
```

Returns a new array containing the first `amount` elements from `array`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.take([1, 2, 3, 4, 5], 3); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4, 5], Array.take(3)); // [1, 2, 3]
```

:::
