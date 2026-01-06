# compact

```ts
function Array.compact(array: T[]): T[]
```

Removes all nullable values from `array`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.compact([1, null, undefined]); // [1]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, null, undefined], Array.compact()); // [1]
```

:::
