# indexBy

`Array.indexBy(target, by, transform?)`

Creates a record by indexing the `target` array using the `by` function to generate keys. Optionally transforms values using the `transform` function.

## Example

::: code-group

```ts [data-first]
import { Array } from "@monstermann/array";

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

Array.indexBy(users, (user) => user.id);
// { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }

Array.indexBy(
    users,
    (user) => user.id,
    (user) => user.name,
); // { 1: "Alice", 2: "Bob" }
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    users,
    Array.indexBy((user) => user.id),
); // { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }

pipe(
    users,
    Array.indexBy(
        (user) => user.id,
        (user) => user.name,
    ),
); // { 1: "Alice", 2: "Bob" }
```

:::
