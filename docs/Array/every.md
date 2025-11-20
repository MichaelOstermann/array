# every

`Array.every(array, predicate)`

Tests whether all elements in the `array` pass the test implemented by the `predicate` function. It returns `true` if all elements pass, otherwise `false`.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

const isEven = (n: number) => n % 2 === 0;

Array.every([2, 4, 6], isEven); // true
Array.every([2, 4, 7], isEven); // false
```

```ts [data-last]
import { Array } from "@monstermann/array";

const isEven = (n: number) => n % 2 === 0;

pipe([2, 4, 6], Array.every(isEven)); // true
pipe([2, 4, 7], Array.every(isEven)); // false
```

:::
