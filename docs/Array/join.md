# join

```ts
function Array.join<T>(
    target: readonly T[],
    separator: string,
): string
```

Joins all elements of `array` into a string, separated by the specified `separator`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.join([1, 2, 3], ", "); // "1, 2, 3"
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.join(", ")); // "1, 2, 3"
```

:::
