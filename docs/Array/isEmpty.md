# isEmpty

```ts
function Array.isEmpty(array: T[]): boolean
```

Returns `true` if `array` has no elements, otherwise returns `false`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.isEmpty([]); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([], Array.isEmpty()); // true
```

:::
