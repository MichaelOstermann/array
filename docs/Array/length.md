# length

```ts
function Array.length<T>(target: readonly T[]): number
```

Returns the number of elements in `array`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.length([1, 2, 3, 4]); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.length()); // 4
```

:::
