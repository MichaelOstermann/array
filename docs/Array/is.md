# is

`Array.is(value)`

Returns `true` if `value` is an array, otherwise returns `false`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.is([1, 2, 3]); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.is()); // true
```

:::
