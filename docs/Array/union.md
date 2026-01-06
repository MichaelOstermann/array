# union

```ts
function Array.union(target: T[], source: T[]): T[]
```

Returns a new array containing all unique elements from both `target` and `source`. Elements from `source` that are not already in `target` are added to the result.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.union([1, 2, 3], [3, 4, 5]); // [1, 2, 3, 4, 5]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.union([3, 4, 5])); // [1, 2, 3, 4, 5]
```

:::
