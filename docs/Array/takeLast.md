# takeLast

```ts
function Array.takeLast(array: T[], count: number): T[]
```

Returns a new array containing the last `amount` elements from `array`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.takeLast([1, 2, 3, 4, 5], 3); // [3, 4, 5]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4, 5], Array.takeLast(3)); // [3, 4, 5]
```

:::
