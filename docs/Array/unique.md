# unique

```ts
function Array.unique(array: T[]): T[]
```

Returns a new array with only the unique elements from `target`, preserving the order of first occurrence.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.unique([1, 2, 2, 3, 1]); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 2, 3, 1], Array.unique()); // [1, 2, 3]
```

:::
