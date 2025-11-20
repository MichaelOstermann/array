# create

`Array.create(target, map?)`

An alias for `Array.from(target, map?)`.

## Example

```ts
import { Array } from "@monstermann/array";

Array.create({ length: 3 }, (_, i) => i); // [0, 1, 2]
```
