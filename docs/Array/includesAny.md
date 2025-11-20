# includesAny

`Array.includesAny(array, values)`

Returns `true` if `array` contains any of the `values`, otherwise returns `false`. Supports iterables for the `values` parameter.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.includesAny([1, 2, 3, 4], [5, 6, 2]); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.includesAny([5, 6, 2])); // true
```

:::
