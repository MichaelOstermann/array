# clone

```ts
function Array.clone(array: T[]): T[]
```

Creates a shallow copy of `array`, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

Array.clone([1, 2, 3, 4]); // [1, 2, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.clone()); // [1, 2, 3, 4]
```

:::
