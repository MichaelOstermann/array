# forEach

`Array.forEach(array, callback)`

Executes the provided `callback` function once for each element in `array` and returns the original array.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.forEach([1, 2, 3], (x) => console.log(x)); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.forEach((x) => console.log(x)),
); // [1, 2, 3]
```

:::
