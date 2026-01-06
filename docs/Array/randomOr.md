# randomOr

```ts
function Array.randomOr(array: T[], fallback: U): T | U
```

Returns a random element from `array`, or `fallback` if the array is empty.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.randomOr([1, 2, 3, 4], 0); // 2 (random)
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.randomOr(0)); // 2 (random)
```

:::
