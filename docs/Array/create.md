# create

```ts
function Array.create(
    target: Iterable<T> | ArrayLike<T>,
    map?: (value: T, index: number) => U
): U[]
```

An alias for `Array.from(target, map?)`.

## Example

```ts
import { Array } from "@monstermann/array";

Array.create({ length: 3 }, (_, i) => i); // [0, 1, 2]
```
