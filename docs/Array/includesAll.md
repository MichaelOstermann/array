# includesAll

```ts
function Array.includesAll<T>(
    target: readonly T[],
    values: Iterable<NoInfer<T>>,
): boolean
```

Returns `true` if `array` contains all `values`, otherwise returns `false`. Supports iterables for the `values` parameter.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.includesAll([1, 2, 3, 4], [2, 3]); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.includesAll([2, 3])); // true
```

:::
