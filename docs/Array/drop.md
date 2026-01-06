# drop

```ts
function Array.drop(array: T[], amount: number): T[]
```

Removes the first `amount` elements from `array`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.drop([1, 2, 3, 4, 5], 2); // [3, 4, 5]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4, 5], Array.drop(2)); // [3, 4, 5]
```

:::
