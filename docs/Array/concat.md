# concat

```ts
function Array.concat(array: T[], source: T[]): T[]
```

Concatenates `source` array to the end of `array`, returning a new array with the combined elements.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.concat([1, 2], [3, 4]); // [1, 2, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2], Array.concat([3, 4])); // [1, 2, 3, 4]
```

:::
