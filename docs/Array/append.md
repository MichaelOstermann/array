# append

```ts
function Array.append<T>(
    target: readonly T[],
    value: NoInfer<T>,
): T[]
```

Appends `value` to the end of `array`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.append([1, 2, 3], 4); // [1, 2, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.append(4)); // [1, 2, 3, 4]
```

:::
