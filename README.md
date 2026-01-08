<div align="center">

<h1>array</h1>

![Minified](https://img.shields.io/badge/Minified-17.38_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff) ![Minzipped](https://img.shields.io/badge/Minzipped-3.39_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff)

**Functional utilities for arrays.**

[Documentation](https://MichaelOstermann.github.io/array)

</div>

## Features

- Opt-in mutability with [`remmi`](https://michaelostermann.github.io/remmi/)
- Reference preservation (`filter(array, () => true) === array`)
- Pipe-friendly (`pipe(filter(() => true))(array)`)
- Graceful failure handling (`at()`, `atOr()`, `atOrElse()`, `atOrThrow()`)

## Installation

```sh [npm]
npm install @monstermann/array
```

```sh [pnpm]
pnpm add @monstermann/array
```

```sh [yarn]
yarn add @monstermann/array
```

```sh [bun]
bun add @monstermann/array
```

## Tree-shaking

### Installation

```sh [npm]
npm install -D @monstermann/unplugin-array
```

```sh [pnpm]
pnpm -D add @monstermann/unplugin-array
```

```sh [yarn]
yarn -D add @monstermann/unplugin-array
```

```sh [bun]
bun -D add @monstermann/unplugin-array
```

### Usage

```ts [Vite]
// vite.config.ts
import array from "@monstermann/unplugin-array/vite";

export default defineConfig({
    plugins: [array()],
});
```

```ts [Rollup]
// rollup.config.js
import array from "@monstermann/unplugin-array/rollup";

export default {
    plugins: [array()],
};
```

```ts [Rolldown]
// rolldown.config.js
import array from "@monstermann/unplugin-array/rolldown";

export default {
    plugins: [array()],
};
```

```ts [Webpack]
// webpack.config.js
const array = require("@monstermann/unplugin-array/webpack");

module.exports = {
    plugins: [array()],
};
```

```ts [Rspack]
// rspack.config.js
const array = require("@monstermann/unplugin-array/rspack");

module.exports = {
    plugins: [array()],
};
```

```ts [ESBuild]
// esbuild.config.js
import { build } from "esbuild";
import array from "@monstermann/unplugin-array/esbuild";

build({
    plugins: [array()],
});
```

## Array

### append

```ts
function Array.append<T>(
    target: readonly T[],
    value: NoInfer<T>,
): T[]
```

Appends `value` to the end of `array`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.append([1, 2, 3], 4); // [1, 2, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.append(4)); // [1, 2, 3, 4]
```

### at

```ts
function Array.at<T>(
    target: readonly T[],
    offset: number,
): T | undefined
```

Returns the value at the specified `offset`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.at([1, 2, 3], -1); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.at(-1)); // 3
```

### atOr

```ts
function Array.atOr<T, U>(
    target: readonly T[],
    offset: number,
    or: U,
): Exclude<T, null | undefined> | U
```

Returns the value at the specified `offset`. Returns `fallback` if the `offset` was out of range, or the retrieved value was nullable.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.atOr([1, null], -1, 2); // 2
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, null], Array.atOr(-1, 2)); // 2
```

### atOrElse

```ts
function Array.atOrElse<T, U>(
    target: readonly T[],
    offset: number,
    orElse: (target: readonly NoInfer<T>[]) => U,
): Exclude<T, null | undefined> | U
```

Returns the value at the specified `offset`. Calls `fallback` if the `offset` was out of range, or the retrieved value was nullable.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.atOrElse([1, null], -1, (array) => array.length); // 2
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, null],
    Array.atOrElse(-1, (array) => array.length),
); // 2
```

### atOrThrow

```ts
function Array.atOrThrow<T>(
    target: readonly T[],
    offset: number,
): Exclude<T, null | undefined>
```

Returns the value at the specified `offset`, throws an exception if the `offset` was out of range, or the retrieved value was nullable.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.atOrThrow([1, null], -1); // Error
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, null], Array.atOrThrow(-1)); // Error
```

### clone

```ts
function Array.clone<T>(target: readonly T[]): T[]
```

Creates a shallow copy of `array`, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.clone([1, 2, 3, 4]); // [1, 2, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.clone()); // [1, 2, 3, 4]
```

### compact

```ts
function Array.compact<T>(
    target: readonly T[],
): readonly Exclude<T, null | undefined>[]
```

Removes all nullable values from `array`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.compact([1, null, undefined]); // [1]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, null, undefined], Array.compact()); // [1]
```

### concat

```ts
function Array.concat<T>(target: T[], source: NoInfer<T>[]): T[]
```

Concatenates `source` array to the end of `array`, returning a new array with the combined elements.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.concat([1, 2], [3, 4]); // [1, 2, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2], Array.concat([3, 4])); // [1, 2, 3, 4]
```

### countBy

```ts
function Array.countBy<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): number
```

Counts the number of elements in the `target` array satisfy the provided `predicate` function.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

const isEven = (n) => n % 2 === 0;
Array.countBy([1, 2, 3, 4, 5], isEven); // 2
```

```ts [data-last]
import { Array } from "@monstermann/array";

const isEven = (n) => n % 2 === 0;
pipe([1, 2, 3, 4, 5], Array.countBy(isEven)); // 2
```

### create

```ts
function Array.create(...args: any): any
```

An alias for `Array.from(target, map?)`.

#### Example

```ts
import { Array } from "@monstermann/array";

Array.create({ length: 3 }, (_, i) => i); // [0, 1, 2]
```

### drop

```ts
function Array.drop<T>(
    target: readonly T[],
    amount: number,
): readonly T[]
```

Removes the first `amount` elements from `array`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.drop([1, 2, 3, 4, 5], 2); // [3, 4, 5]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4, 5], Array.drop(2)); // [3, 4, 5]
```

### dropLast

```ts
function Array.dropLast<T>(
    target: readonly T[],
    amount: number,
): readonly T[]
```

Removes `amount` of elements from the end of the `target` array.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.dropLast([1, 2, 3, 4, 5], 2); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4, 5], Array.dropLast(2)); // [1, 2, 3]
```

### empty

```ts
const Array.empty: []
```

A reference to an empty array - useful if you want to clear an array, but want any `===` checks to pass if it already was empty.

#### Example

```ts
import { Array } from "@monstermann/array";

empty; // []
```

### every

```ts
function Array.every<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): boolean
```

Tests whether all elements in the `array` pass the test implemented by the `predicate` function. It returns `true` if all elements pass, otherwise `false`.

#### Example

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

### filter

```ts
function Array.filter<T>(
    target: readonly T[],
    by: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): readonly T[]
```

Filters elements from `target` array based on the predicate function `by`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.filter([1, 2, 3, 4], (x) => x > 2); // [3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.filter((x) => x > 2),
); // [3, 4]
```

### find

```ts
function Array.find<T>(
    target: T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): T | undefined
```

Returns the first element in `array` that satisfies the provided `predicate` function, or `undefined` if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.find([1, 2, 3, 4], (x) => x > 2); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.find((x) => x > 2),
); // 3
```

### findIndex

```ts
function Array.findIndex<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): number
```

Returns the index of the first element in `array` that satisfies the provided `predicate` function, or -1 if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findIndex([1, 2, 3, 4], (x) => x > 2); // 2
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findIndex((x) => x > 2),
); // 2
```

### findIndexOr

```ts
function Array.findIndexOr<T, U>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    or: U,
): number | U
```

Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, returns `or`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findIndexOr([1, 2, 3, 4], (x) => x > 2, -1); // 2
Array.findIndexOr([1, 2, 3, 4], (x) => x > 5, -1); // -1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findIndexOr((x) => x > 2, -1),
); // 2

pipe(
    [1, 2, 3, 4],
    Array.findIndexOr((x) => x > 5, -1),
); // -1
```

### findIndexOrElse

```ts
function Array.findIndexOrElse<T, U>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    orElse: (target: readonly NoInfer<T>[]) => U,
): number | U
```

Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, calls `orElse` with the original array.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findIndexOrElse(
    [1, 2, 3, 4],
    (x) => x > 2,
    () => -1,
); // 2

Array.findIndexOrElse(
    [1, 2, 3, 4],
    (x) => x > 5,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findIndexOrElse(
        (x) => x > 2,
        () => -1,
    ),
); // 2

pipe(
    [1, 2, 3, 4],
    Array.findIndexOrElse(
        (x) => x > 5,
        (arr) => arr.length,
    ),
); // 4
```

### findIndexOrThrow

```ts
function Array.findIndexOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): number
```

Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, throws an error.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findIndexOrThrow([1, 2, 3, 4], (x) => x > 2); // 2
Array.findIndexOrThrow([1, 2, 3, 4], (x) => x > 5); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findIndexOrThrow((x) => x > 2),
); // 2

pipe(
    [1, 2, 3, 4],
    Array.findIndexOrThrow((x) => x > 5),
); // throws FnError
```

### findLast

```ts
function Array.findLast<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): T | undefined
```

Returns the last element in `array` that satisfies the provided `predicate` function, or `undefined` if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLast([1, 2, 3, 4], (x) => x > 2); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findLast((x) => x > 2),
); // 4
```

### findLastIndex

```ts
function Array.findLastIndex<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): number
```

Returns the index of the last element in `array` that satisfies the provided `predicate` function, or -1 if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastIndex([1, 2, 3, 4], (x) => x > 2); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findLastIndex((x) => x > 2),
); // 3
```

### findLastIndexOr

```ts
function Array.findLastIndexOr<T, U>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    or: U,
): number | U
```

Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, returns `or`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastIndexOr([1, 3, 2, 4], (x) => x > 2, -1); // 3
Array.findLastIndexOr([1, 2, 3, 4], (x) => x > 5, -1); // -1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 3, 2, 4],
    Array.findLastIndexOr((x) => x > 2, -1),
); // 3

pipe(
    [1, 2, 3, 4],
    Array.findLastIndexOr((x) => x > 5, -1),
); // -1
```

### findLastIndexOrElse

```ts
function Array.findLastIndexOrElse<T, U>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    orElse: (target: readonly NoInfer<T>[]) => U,
): number | U
```

Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, calls `orElse` with the original array.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastIndexOrElse(
    [1, 3, 2, 4],
    (x) => x > 2,
    () => -1,
); // 3

Array.findLastIndexOrElse(
    [1, 2, 3, 4],
    (x) => x > 5,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 3, 2, 4],
    Array.findLastIndexOrElse(
        (x) => x > 2,
        () => -1,
    ),
); // 3

pipe(
    [1, 2, 3, 4],
    Array.findLastIndexOrElse(
        (x) => x > 5,
        (arr) => arr.length,
    ),
); // 4
```

### findLastIndexOrThrow

```ts
function Array.findLastIndexOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): number
```

Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, throws an error.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastIndexOrThrow([1, 3, 2, 4], (x) => x > 2); // 3
Array.findLastIndexOrThrow([1, 2, 3, 4], (x) => x > 5); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 3, 2, 4],
    Array.findLastIndexOrThrow((x) => x > 2),
); // 3

pipe(
    [1, 2, 3, 4],
    Array.findLastIndexOrThrow((x) => x > 5),
); // throws FnError
```

### findLastOr

```ts
function Array.findLastOr<T, V>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    or: V,
): Exclude<T, null | undefined> | V
```

Returns the last element in `array` that satisfies the provided `predicate` function, or `fallback` if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastOr([1, 2, 3, 4], (x) => x > 10, 0); // 0
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findLastOr((x) => x > 10, 0),
); // 0
```

### findLastOrElse

```ts
function Array.findLastOrElse<T, V>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    orElse: (target: readonly NoInfer<T>[]) => V,
): Exclude<T, null | undefined> | V
```

Returns the last element in `array` that satisfies the provided `predicate` function, or the result of calling `callback` with the array if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findLastOrElse(
        (x) => x > 10,
        (arr) => arr.length,
    ),
); // 4
```

### findLastOrThrow

```ts
function Array.findLastOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): Exclude<T, null | undefined>
```

Returns the last element in `array` that satisfies the provided `predicate` function, or throws an error if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findLastOrThrow([1, 2, 3, 4], (x) => x > 2); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findLastOrThrow((x) => x > 2),
); // 4
```

### findMap

```ts
function Array.findMap<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    mapper: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
): readonly T[]
```

Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMap(
    [1, 2, 3, 4],
    (x) => x > 2,
    (x) => x * 10,
); // [1, 2, 30, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMap(
        (x) => x > 2,
        (x) => x * 10,
    ),
); // [1, 2, 30, 4]
```

### findMapAll

```ts
function Array.findMapAll<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    mapper: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
): readonly T[]
```

Finds all elements in `array` that satisfy the provided `predicate` function and applies the `mapper` function to each of them, returning a new array with the mapped elements.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapAll(
    [1, 2, 3, 4],
    (x) => x > 2,
    (x) => x * 10,
); // [1, 2, 30, 40]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapAll(
        (x) => x > 2,
        (x) => x * 10,
    ),
); // [1, 2, 30, 40]
```

### findMapLast

```ts
function Array.findMapLast<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    mapper: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
): readonly T[]
```

Finds the last element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapLast(
    [1, 2, 3, 4],
    (x) => x > 2,
    (x) => x * 10,
); // [1, 2, 3, 40]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapLast(
        (x) => x > 2,
        (x) => x * 10,
    ),
); // [1, 2, 3, 40]
```

### findMapLastOr

```ts
function Array.findMapLastOr<T, V>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    mapper: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
    or: V,
): readonly T[] | V
```

Finds the last element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or `fallback` if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapLastOr(
    [1, 2, 3, 4],
    (x) => x > 10,
    (x) => x * 10,
    [],
); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapLastOr(
        (x) => x > 10,
        (x) => x * 10,
        [],
    ),
); // []
```

### findMapLastOrElse

```ts
function Array.findMapLastOrElse<T, V>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    mapper: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
    orElse: (target: readonly NoInfer<T>[]) => V,
): readonly T[] | V
```

Finds the last element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or the result of calling `callback` with the array if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapLastOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (x) => x * 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapLastOrElse(
        (x) => x > 10,
        (x) => x * 10,
        (arr) => arr.length,
    ),
); // 4
```

### findMapLastOrThrow

```ts
function Array.findMapLastOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    mapper: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
): readonly T[]
```

Finds the last element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or throws an error if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapLastOrThrow(
    [1, 2, 3, 4],
    (x) => x > 2,
    (x) => x * 10,
); // [1, 2, 3, 40]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapLastOrThrow(
        (x) => x > 2,
        (x) => x * 10,
    ),
); // [1, 2, 3, 40]
```

### findMapOr

```ts
function Array.findMapOr<T, V>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    mapper: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
    or: V,
): readonly T[] | V
```

Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or `fallback` if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapOr(
    [1, 2, 3, 4],
    (x) => x > 10,
    (x) => x * 10,
    [],
); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapOr(
        (x) => x > 10,
        (x) => x * 10,
        [],
    ),
); // []
```

### findMapOrElse

```ts
function Array.findMapOrElse<T, V>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    mapper: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
    orElse: (target: readonly NoInfer<T>[]) => V,
): readonly T[] | V
```

Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or the result of calling `callback` with the array if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (x) => x * 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapOrElse(
        (x) => x > 10,
        (x) => x * 10,
        (arr) => arr.length,
    ),
); // 4
```

### findMapOrThrow

```ts
function Array.findMapOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    mapper: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
): readonly T[]
```

Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or throws an error if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findMapOrThrow(
    [1, 2, 3, 4],
    (x) => x > 2,
    (x) => x * 10,
); // [1, 2, 30, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findMapOrThrow(
        (x) => x > 2,
        (x) => x * 10,
    ),
); // [1, 2, 30, 4]
```

### findOr

```ts
function Array.findOr<T, V>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    or: V,
): Exclude<T, null | undefined> | V
```

Returns the first element in `array` that satisfies the provided `predicate` function, or `fallback` if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findOr([1, 2, 3, 4], (x) => x > 10, 0); // 0
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findOr((x) => x > 10, 0),
); // 0
```

### findOrElse

```ts
function Array.findOrElse<T, V>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    orElse: (target: readonly NoInfer<T>[]) => V,
): Exclude<T, null | undefined> | V
```

Returns the first element in `array` that satisfies the provided `predicate` function, or the result of calling `callback` with the array if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findOrElse(
        (x) => x > 10,
        (arr) => arr.length,
    ),
); // 4
```

### findOrThrow

```ts
function Array.findOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): Exclude<T, null | undefined>
```

Returns the first element in `array` that satisfies the provided `predicate` function, or throws an error if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findOrThrow([1, 2, 3, 4], (x) => x > 2); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findOrThrow((x) => x > 2),
); // 3
```

### findRemove

```ts
function Array.findRemove<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): readonly T[]
```

Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findRemove([1, 2, 3, 4], (x) => x > 2); // [1, 2, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findRemove((x) => x > 2),
); // [1, 2, 4]
```

### findRemoveLast

```ts
function Array.findRemoveLast<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): readonly T[]
```

Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findRemoveLast([1, 2, 3, 4], (x) => x > 2); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findRemoveLast((x) => x > 2),
); // [1, 2, 3]
```

### findRemoveLastOr

```ts
function Array.findRemoveLastOr<T, U>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    or: U,
): T[] | U
```

Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or `fallback` if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findRemoveLastOr([1, 2, 3, 4], (x) => x > 10, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findRemoveLastOr((x) => x > 10, []),
); // []
```

### findRemoveLastOrElse

```ts
function Array.findRemoveLastOrElse<T, U>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    orElse: (target: readonly NoInfer<T>[]) => U,
): T[] | U
```

Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or the result of calling `callback` with the array if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findRemoveLastOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findRemoveLastOrElse(
        (x) => x > 10,
        (arr) => arr.length,
    ),
); // 4
```

### findRemoveLastOrThrow

```ts
function Array.findRemoveLastOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): T[]
```

Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or throws an error if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findRemoveLastOrThrow([1, 2, 3, 4], (x) => x > 2); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findRemoveLastOrThrow((x) => x > 2),
); // [1, 2, 3]
```

### findRemoveOr

```ts
function Array.findRemoveOr<T, U>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    or: U,
): T[] | U
```

Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or `fallback` if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findRemoveOr([1, 2, 3, 4], (x) => x > 10, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findRemoveOr((x) => x > 10, []),
); // []
```

### findRemoveOrElse

```ts
function Array.findRemoveOrElse<T, U>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    orElse: (target: readonly NoInfer<T>[]) => U,
): T[] | U
```

Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or the result of calling `callback` with the array if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findRemoveOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findRemoveOrElse(
        (x) => x > 10,
        (arr) => arr.length,
    ),
); // 4
```

### findRemoveOrThrow

```ts
function Array.findRemoveOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): T[]
```

Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or throws an error if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findRemoveOrThrow([1, 2, 3, 4], (x) => x > 2); // [1, 2, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findRemoveOrThrow((x) => x > 2),
); // [1, 2, 4]
```

### findReplace

```ts
function Array.findReplace<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    replacement: NoInfer<T>,
): readonly T[]
```

Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplace([1, 2, 3, 4], (x) => x > 2, 10); // [1, 2, 10, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplace((x) => x > 2, 10),
); // [1, 2, 10, 4]
```

### findReplaceLast

```ts
function Array.findReplaceLast<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    replacement: NoInfer<T>,
): readonly T[]
```

Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceLast([1, 2, 3, 4], (x) => x > 2, 10); // [1, 2, 3, 10]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceLast((x) => x > 2, 10),
); // [1, 2, 3, 10]
```

### findReplaceLastOr

```ts
function Array.findReplaceLastOr<T, U>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    replacement: NoInfer<T>,
    or: U,
): readonly T[] | U
```

Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or `fallback` if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceLastOr([1, 2, 3, 4], (x) => x > 10, 99, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceLastOr((x) => x > 10, 99, []),
); // []
```

### findReplaceLastOrElse

```ts
function Array.findReplaceLastOrElse<T, U>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    replacement: NoInfer<T>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): readonly T[] | U
```

Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or the result of calling `callback` with the array if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceLastOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    99,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceLastOrElse(
        (x) => x > 10,
        99,
        (arr) => arr.length,
    ),
); // 4
```

### findReplaceLastOrThrow

```ts
function Array.findReplaceLastOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    replacement: NoInfer<T>,
): readonly T[]
```

Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or throws an error if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceLastOrThrow([1, 2, 3, 4], (x) => x > 2, 99); // [1, 2, 3, 99]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceLastOrThrow((x) => x > 2, 99),
); // [1, 2, 3, 99]
```

### findReplaceOr

```ts
function Array.findReplaceOr<T, U>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    replacement: NoInfer<T>,
    or: U,
): readonly T[] | U
```

Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or `fallback` if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceOr([1, 2, 3, 4], (x) => x > 10, 99, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceOr((x) => x > 10, 99, []),
); // []
```

### findReplaceOrElse

```ts
function Array.findReplaceOrElse<T, U>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    replacement: NoInfer<T>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): readonly T[] | U
```

Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or the result of calling `callback` with the array if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    99,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceOrElse(
        (x) => x > 10,
        99,
        (arr) => arr.length,
    ),
); // 4
```

### findReplaceOrThrow

```ts
function Array.findReplaceOrThrow<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
    replacement: NoInfer<T>,
): readonly T[]
```

Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or throws an error if no element is found.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.findReplaceOrThrow([1, 2, 3, 4], (x) => x > 2, 99); // [1, 2, 99, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.findReplaceOrThrow((x) => x > 2, 99),
); // [1, 2, 99, 4]
```

### first

```ts
function Array.first<T>(target: readonly T[]): T | undefined
```

Returns the first element of `array`, or `undefined` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.first([1, 2, 3, 4]); // 1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.first()); // 1
```

### firstOr

```ts
function Array.firstOr<T, U>(
    target: readonly T[],
    or: U,
): Exclude<T, null | undefined> | U
```

Returns the first element of `array`, or `fallback` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.firstOr([1, 2, 3, 4], 0); // 1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.firstOr(0)); // 1
```

### firstOrElse

```ts
function Array.firstOrElse<T, U>(
    target: readonly T[],
    orElse: (target: readonly NoInfer<T>[]) => U,
): Exclude<T, null | undefined> | U
```

Returns the first element of `array`, or the result of calling `callback` with the array if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.firstOrElse([1, 2, 3, 4], (arr) => arr.length); // 1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.firstOrElse((arr) => arr.length),
); // 1
```

### firstOrThrow

```ts
function Array.firstOrThrow<T>(
    target: readonly T[],
): Exclude<T, null | undefined>
```

Returns the first element of `array`, or throws an error if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.firstOrThrow([1, 2, 3, 4]); // 1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.firstOrThrow()); // 1
```

### flatMap

```ts
function Array.flatMap<T, U>(
    target: readonly T[],
    mapper: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => U[],
): readonly U[]
```

Maps each element in `array` using the `mapper` function and flattens the result by one level.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.flatMap([1, 2, 3], (x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.flatMap((x) => [x, x * 2]),
); // [1, 2, 2, 4, 3, 6]
```

### forEach

```ts
function Array.forEach<T>(
    target: readonly T[],
    callback: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => any,
): readonly T[]
```

Executes the provided `callback` function once for each element in `array` and returns the original array.

#### Example

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

### forEachRight

```ts
function Array.forEachRight<T>(
    target: readonly T[],
    callback: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => any,
): readonly T[]
```

Executes the provided `callback` function once for each element in `array` in reverse order and returns the original array.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.forEachRight([1, 2, 3], (x) => console.log(x)); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.forEachRight((x) => console.log(x)),
); // [1, 2, 3]
```

### groupBy

```ts
function Array.groupBy<T extends object, U extends PropertyKey>(
    target: readonly T[],
    by: (
        value: NoInfer<T>,
        idx: number,
        target: readonly NoInfer<T>[],
    ) => U,
): Record<U, T[]>
```

Groups elements in `array` by the result of calling `grouper` function on each element, optionally transforming each element with `transform`, returning an object with keys as group values and values as arrays of elements.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.groupBy(
    [1, 2, 3, 4],
    (x) => (x % 2 === 0 ? "even" : "odd"),
    (x) => x * 10,
); // { even: [20, 40], odd: [10, 30] }
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.groupBy(
        (x) => (x % 2 === 0 ? "even" : "odd"),
        (x) => x * 10,
    ),
); // { even: [20, 40], odd: [10, 30] }
```

### includes

```ts
function Array.includes<T>(
    target: readonly T[],
    value: NoInfer<T>,
): boolean
```

Returns `true` if `array` contains `value`, otherwise returns `false`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.includes([1, 2, 3, 4], 3); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.includes(3)); // true
```

### includesAll

```ts
function Array.includesAll<T>(
    target: readonly T[],
    values: Iterable<NoInfer<T>>,
): boolean
```

Returns `true` if `array` contains all `values`, otherwise returns `false`. Supports iterables for the `values` parameter.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.includesAll([1, 2, 3, 4], [2, 3]); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.includesAll([2, 3])); // true
```

### includesAny

```ts
function Array.includesAny<T>(
    target: readonly T[],
    values: Iterable<NoInfer<T>>,
): boolean
```

Returns `true` if `array` contains any of the `values`, otherwise returns `false`. Supports iterables for the `values` parameter.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.includesAny([1, 2, 3, 4], [5, 6, 2]); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.includesAny([5, 6, 2])); // true
```

### includesNone

```ts
function Array.includesNone<T, U extends T>(
    target: readonly T[],
    values: Iterable<U>,
): target is Exclude<T, U>[]
```

Returns `true` if `array` contains none of the `values`, otherwise returns `false`. Supports iterables for the `values` parameter.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.includesNone([1, 2, 3, 4], [5, 6, 7]); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.includesNone([5, 6, 7])); // true
```

### indexBy

```ts
function Array.indexBy<T extends object, U extends PropertyKey>(
    target: readonly T[],
    by: (
        value: NoInfer<T>,
        idx: number,
        target: readonly NoInfer<T>[],
    ) => U,
): Record<U, T>
```

Creates a record by indexing the `target` array using the `by` function to generate keys. Optionally transforms values using the `transform` function.

#### Example

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

### indexOf

```ts
function Array.indexOf<T>(
    target: readonly T[],
    value: NoInfer<T>,
): number
```

Returns the first index at which `value` can be found in `array`, or -1 if it is not present.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.indexOf([1, 2, 3, 2, 4], 2); // 1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2, 4], Array.indexOf(2)); // 1
```

### indexOfOr

```ts
function Array.indexOfOr<T, U>(
    target: readonly T[],
    value: NoInfer<T>,
    or: U,
): number | U
```

Returns the index of the first occurrence of `value` in `target`. If `value` is not found, returns `or`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.indexOfOr([1, 2, 3, 2], 2, -1); // 1
Array.indexOfOr([1, 2, 3], 4, -1); // -1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.indexOfOr(2, -1)); // 1
pipe([1, 2, 3], Array.indexOfOr(4, -1)); // -1
```

### indexOfOrElse

```ts
function Array.indexOfOrElse<T, U>(
    target: readonly T[],
    value: NoInfer<T>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): number | U
```

Returns the index of the first occurrence of `value` in `target`. If `value` is not found, calls `orElse` with the original array.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.indexOfOrElse([1, 2, 3, 2], 2, () => -1); // 1
Array.indexOfOrElse([1, 2, 3], 4, (arr) => arr.length); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 2],
    Array.indexOfOrElse(2, () => -1),
); // 1

pipe(
    [1, 2, 3],
    Array.indexOfOrElse(4, (arr) => arr.length),
); // 3
```

### indexOfOrThrow

```ts
function Array.indexOfOrThrow<T>(
    target: readonly T[],
    value: NoInfer<T>,
): number
```

Returns the index of the first occurrence of `value` in `target`. If `value` is not found, throws an error.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.indexOfOrThrow([1, 2, 3, 2], 2); // 1
Array.indexOfOrThrow([1, 2, 3], 4); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.indexOfOrThrow(2)); // 1
pipe([1, 2, 3], Array.indexOfOrThrow(4)); // throws FnError
```

### insertAllAt

```ts
function Array.insertAllAt<T>(
    target: readonly T[],
    idx: number,
    values: Iterable<NoInfer<T>>,
): readonly T[]
```

Inserts all elements from `values` at the specified `index` in `array`, returning a new array with the inserted elements. Supports iterables for the `values` parameter.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAllAt([1, 2, 3], 1, [10, 20]); // [1, 10, 20, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.insertAllAt(1, [10, 20])); // [1, 10, 20, 2, 3]
```

### insertAllAtOr

```ts
function Array.insertAllAtOr<T, U>(
    target: readonly T[],
    idx: number,
    values: Iterable<NoInfer<T>>,
    or: U,
): readonly T[] | U
```

Inserts all `values` at the specified `idx` in `target`. If the index is out of bounds, returns `or`. Supports iterables.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAllAtOr([1, 2, 3], 1, [8, 9], []); // [1, 8, 9, 2, 3]
Array.insertAllAtOr([1, 2, 3], 5, [8, 9], []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.insertAllAtOr(1, [8, 9], [])); // [1, 8, 9, 2, 3]
pipe([1, 2, 3], Array.insertAllAtOr(5, [8, 9], [])); // []
```

### insertAllAtOrElse

```ts
function Array.insertAllAtOrElse<T, U>(
    target: readonly T[],
    idx: number,
    values: Iterable<NoInfer<T>>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): readonly T[] | U
```

Inserts all `values` at the specified `idx` in `target`. If the index is out of bounds, calls `orElse` with the original array. Supports iterables.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAllAtOrElse([1, 2, 3], 1, [8, 9], () => []); // [1, 8, 9, 2, 3]
Array.insertAllAtOrElse([1, 2, 3], 5, [8, 9], (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.insertAllAtOrElse(1, [8, 9], () => []),
); // [1, 8, 9, 2, 3]

pipe(
    [1, 2, 3],
    Array.insertAllAtOrElse(5, [8, 9], (arr) => arr),
); // [1, 2, 3]
```

### insertAllAtOrThrow

```ts
function Array.insertAllAtOrThrow<T>(
    target: readonly T[],
    idx: number,
    values: Iterable<NoInfer<T>>,
): readonly T[]
```

Inserts all `values` at the specified `idx` in `target`. If the index is out of bounds, throws an error. Supports iterables.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAllAtOrThrow([1, 2, 3], 1, [8, 9]); // [1, 8, 9, 2, 3]
Array.insertAllAtOrThrow([1, 2, 3], 5, [8, 9]); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.insertAllAtOrThrow(1, [8, 9])); // [1, 8, 9, 2, 3]
pipe([1, 2, 3], Array.insertAllAtOrThrow(5, [8, 9])); // throws FnError
```

### insertAt

```ts
function Array.insertAt<T>(
    target: readonly T[],
    idx: number,
    value: NoInfer<T>,
): readonly T[]
```

Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAt([1, 2, 3], 1, 10); // [1, 10, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.insertAt(1, 10)); // [1, 10, 2, 3]
```

### insertAtOr

```ts
function Array.insertAtOr<T, U>(
    target: readonly T[],
    idx: number,
    value: NoInfer<T>,
    or: U,
): T[] | U
```

Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or `fallback` if the index is out of bounds.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAtOr([1, 2, 3], 10, 99, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.insertAtOr(10, 99, [])); // []
```

### insertAtOrElse

```ts
function Array.insertAtOrElse<T, U>(
    target: readonly T[],
    idx: number,
    value: NoInfer<T>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): T[] | U
```

Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or the result of calling `callback` with the array if the index is out of bounds.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAtOrElse([1, 2, 3], 10, 99, (arr) => arr.length); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.insertAtOrElse(10, 99, (arr) => arr.length),
); // 3
```

### insertAtOrThrow

```ts
function Array.insertAtOrThrow<T>(
    target: readonly T[],
    idx: number,
    value: NoInfer<T>,
): T[]
```

Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or throws an error if the index is out of bounds.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.insertAtOrThrow([1, 2, 3], 1, 10); // [1, 10, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.insertAtOrThrow(1, 10)); // [1, 10, 2, 3]
```

### is

```ts
function Array.is(target: unknown): target is readonly unknown[]
```

Returns `true` if `value` is an array, otherwise returns `false`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.is([1, 2, 3]); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.is()); // true
```

### isEmpty

```ts
function Array.isEmpty<T>(target: readonly T[]): boolean
```

Returns `true` if `array` has no elements, otherwise returns `false`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.isEmpty([]); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([], Array.isEmpty()); // true
```

### isShallowEqual

```ts
function Array.isShallowEqual<T, U extends T>(
    target: readonly T[],
    source: readonly U[],
): target is U[]
```

Returns `true` if `target` and `source` have the same length and their elements are equal using shallow comparison, otherwise returns `false`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.isShallowEqual([1, 2, 3], [1, 2, 3]); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.isShallowEqual([1, 2, 3])); // true
```

### join

```ts
function Array.join<T>(
    target: readonly T[],
    separator: string,
): string
```

Joins all elements of `array` into a string, separated by the specified `separator`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.join([1, 2, 3], ", "); // "1, 2, 3"
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.join(", ")); // "1, 2, 3"
```

### last

```ts
function Array.last<T>(target: readonly T[]): T | undefined
```

Returns the last element of `array`, or `undefined` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.last([1, 2, 3, 4]); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.last()); // 4
```

### lastIndexOf

```ts
function Array.lastIndexOf<T>(
    target: readonly T[],
    value: NoInfer<T>,
): number
```

Returns the last index at which `value` can be found in `array`, or -1 if it is not present.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.lastIndexOf([1, 2, 3, 2, 4], 2); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2, 4], Array.lastIndexOf(2)); // 3
```

### lastIndexOfOr

```ts
function Array.lastIndexOfOr<T, U>(
    target: readonly T[],
    value: NoInfer<T>,
    or: U,
): number | U
```

Returns the index of the last occurrence of `value` in `target`. If `value` is not found, returns `or`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.lastIndexOfOr([1, 2, 3, 2], 2, -1); // 3
Array.lastIndexOfOr([1, 2, 3], 4, -1); // -1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.lastIndexOfOr(2, -1)); // 3
pipe([1, 2, 3], Array.lastIndexOfOr(4, -1)); // -1
```

### lastIndexOfOrElse

```ts
function Array.lastIndexOfOrElse<T, U>(
    target: readonly T[],
    value: NoInfer<T>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): number | U
```

Returns the index of the last occurrence of `value` in `target`. If `value` is not found, calls `orElse` with the original array.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.lastIndexOfOrElse([1, 2, 3, 2], 2, () => -1); // 3
Array.lastIndexOfOrElse([1, 2, 3], 4, (arr) => arr.length); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 2],
    Array.lastIndexOfOrElse(2, () => -1),
); // 3

pipe(
    [1, 2, 3],
    Array.lastIndexOfOrElse(4, (arr) => arr.length),
); // 3
```

### lastIndexOfOrThrow

```ts
function Array.lastIndexOfOrThrow<T>(
    target: readonly T[],
    value: NoInfer<T>,
): number
```

Returns the index of the last occurrence of `value` in `target`. If `value` is not found, throws an error.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.lastIndexOfOrThrow([1, 2, 3, 2], 2); // 3
Array.lastIndexOfOrThrow([1, 2, 3], 4); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.lastIndexOfOrThrow(2)); // 3
pipe([1, 2, 3], Array.lastIndexOfOrThrow(4)); // throws FnError
```

### lastOr

```ts
function Array.lastOr<T, U>(
    target: readonly T[],
    or: U,
): Exclude<T, null | undefined> | U
```

Returns the last element of `array`, or `fallback` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.lastOr([1, 2, 3, 4], 0); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.lastOr(0)); // 4
```

### lastOrElse

```ts
function Array.lastOrElse<T, U>(
    target: readonly T[],
    orElse: (target: readonly NoInfer<T>[]) => U,
): Exclude<T, null | undefined> | U
```

Returns the last element of `array`, or the result of calling `callback` with the array if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.lastOrElse([1, 2, 3, 4], (arr) => arr.length); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.lastOrElse((arr) => arr.length),
); // 4
```

### lastOrThrow

```ts
function Array.lastOrThrow<T>(
    target: readonly T[],
): Exclude<T, null | undefined>
```

Returns the last element of `array`, or throws an error if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.lastOrThrow([1, 2, 3, 4]); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.lastOrThrow()); // 4
```

### length

```ts
function Array.length<T>(target: readonly T[]): number
```

Returns the number of elements in `array`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.length([1, 2, 3, 4]); // 4
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.length()); // 4
```

### mapAt

```ts
function Array.mapAt<T>(
    target: readonly T[],
    idx: number,
    map: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
): readonly T[]
```

Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.mapAt([1, 2, 3, 4], 1, (x) => x * 10); // [1, 20, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.mapAt(1, (x) => x * 10),
); // [1, 20, 3, 4]
```

### mapAtOr

```ts
function Array.mapAtOr<T, U>(
    target: readonly T[],
    idx: number,
    map: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
    or: U,
): readonly T[] | U
```

Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element, or `fallback` if the index is out of bounds.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.mapAtOr([1, 2, 3], 10, (x) => x * 10, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.mapAtOr(10, (x) => x * 10, []),
); // []
```

### mapAtOrElse

```ts
function Array.mapAtOrElse<T, U>(
    target: readonly T[],
    idx: number,
    map: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
    orElse: (target: readonly NoInfer<T>[]) => U,
): readonly T[] | U
```

Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element, or the result of calling `callback` with the array if the index is out of bounds.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.mapAtOrElse(
    [1, 2, 3],
    10,
    (x) => x * 10,
    (arr) => arr.length,
); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.mapAtOrElse(
        10,
        (x) => x * 10,
        (arr) => arr.length,
    ),
); // 3
```

### mapAtOrThrow

```ts
function Array.mapAtOrThrow<T>(
    target: readonly T[],
    idx: number,
    map: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => T,
): readonly T[]
```

Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element, or throws an error if the index is out of bounds.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.mapAtOrThrow([1, 2, 3, 4], 1, (x) => x * 10); // [1, 20, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.mapAtOrThrow(1, (x) => x * 10),
); // [1, 20, 3, 4]
```

### mapEach

```ts
function Array.mapEach<T, U>(
    target: readonly T[],
    mapper: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => U,
): readonly U[]
```

Applies the `mapper` function to each element in `array`, returning a new array with the mapped elements.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.mapEach([1, 2, 3, 4], (x) => x * 2); // [2, 4, 6, 8]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.mapEach((x) => x * 2),
); // [2, 4, 6, 8]
```

### maxOr

```ts
function Array.maxOr<T>(
    target: readonly number[],
    or: T,
): number | T
```

Returns the maximum value in the number `array`, or `fallback` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.maxOr([1, 3, 2, 5], 0); // 5
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 3, 2, 5], Array.maxOr(0)); // 5
```

### maxOrElse

```ts
function Array.maxOrElse<T>(
    target: readonly number[],
    orElse: (target: readonly number[]) => T,
): number | T
```

Returns the maximum value from `array`, or calls `orElse` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.maxOrElse([1, 5, 3], () => 0); // 5
Array.maxOrElse([], () => 0); // 0
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 5, 3],
    Array.maxOrElse(() => 0),
); // 5

pipe(
    [],
    Array.maxOrElse(() => 0),
); // 0
```

### maxOrThrow

```ts
function Array.maxOrThrow(target: readonly number[]): number
```

Returns the maximum value from `array`, or throws an error if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.maxOrThrow([1, 5, 3]); // 5
Array.maxOrThrow([]); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 5, 3], Array.maxOrThrow()); // 5
pipe([], Array.maxOrThrow()); // throws FnError
```

### meanOr

```ts
function Array.meanOr(
    target: readonly number[],
    or: number,
): number
```

Returns the mean (average) value of the number `array`, or `fallback` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.meanOr([1, 2, 3, 4], 0); // 2.5
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.meanOr(0)); // 2.5
```

### meanOrElse

```ts
function Array.meanOrElse<T>(
    target: readonly number[],
    orElse: (target: readonly number[]) => T,
): number | T
```

Returns the mean (average) value from `array`, or calls `orElse` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.meanOrElse([1, 2, 3], () => 0); // 2
Array.meanOrElse([], () => 0); // 0
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.meanOrElse(() => 0),
); // 2

pipe(
    [],
    Array.meanOrElse(() => 0),
); // 0
```

### meanOrThrow

```ts
function Array.meanOrThrow(target: readonly number[]): number
```

Returns the mean (average) value from `array`, or throws an error if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.meanOrThrow([1, 2, 3]); // 2
Array.meanOrThrow([]); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.meanOrThrow()); // 2
pipe([], Array.meanOrThrow()); // throws FnError
```

### medianOr

```ts
function Array.medianOr(
    target: readonly number[],
    or: number,
): number
```

Returns the median value of the number `array`, or `fallback` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.medianOr([1, 2, 3, 4, 5], 0); // 3
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4, 5], Array.medianOr(0)); // 3
```

### medianOrElse

```ts
function Array.medianOrElse<T>(
    target: readonly number[],
    orElse: (target: readonly number[]) => T,
): number | T
```

Returns the median value from `array`, or calls `orElse` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.medianOrElse([1, 3, 5], () => 0); // 3
Array.medianOrElse([1, 2, 3, 4], () => 0); // 2.5
Array.medianOrElse([], () => 0); // 0
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 3, 5],
    Array.medianOrElse(() => 0),
); // 3

pipe(
    [1, 2, 3, 4],
    Array.medianOrElse(() => 0),
); // 2.5

pipe(
    [],
    Array.medianOrElse(() => 0),
); // 0
```

### medianOrThrow

```ts
function Array.medianOrThrow(target: readonly number[]): number
```

Returns the median value from `array`, or throws an error if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.medianOrThrow([1, 3, 5]); // 3
Array.medianOrThrow([1, 2, 3, 4]); // 2.5
Array.medianOrThrow([]); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 3, 5], Array.medianOrThrow()); // 3
pipe([1, 2, 3, 4], Array.medianOrThrow()); // 2.5
pipe([], Array.medianOrThrow()); // throws FnError
```

### minOr

```ts
function Array.minOr<T>(
    target: readonly number[],
    or: T,
): number | T
```

Returns the minimum value in the number `array`, or `fallback` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.minOr([5, 1, 3, 2], 0); // 1
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([5, 1, 3, 2], Array.minOr(0)); // 1
```

### minOrElse

```ts
function Array.minOrElse<T>(
    target: readonly number[],
    orElse: (target: readonly NoInfer<number>[]) => T,
): number | T
```

Returns the minimum value from `target` array, or calls `orElse` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.minOrElse([5, 2, 8, 1], () => 0); // 1
Array.minOrElse([], () => 0); // 0
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [5, 2, 8, 1],
    Array.minOrElse(() => 0),
); // 1

pipe(
    [],
    Array.minOrElse(() => 0),
); // 0
```

### minOrThrow

```ts
function Array.minOrThrow(target: readonly number[]): number
```

Returns the minimum value from `target` array, or throws an error if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.minOrThrow([5, 2, 8, 1]); // 1
Array.minOrThrow([]); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([5, 2, 8, 1], Array.minOrThrow()); // 1
pipe([], Array.minOrThrow()); // throws FnError
```

### none

```ts
function Array.none<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): boolean
```

Returns `true` if no elements in `array` satisfy the provided `predicate` function, otherwise returns `false`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.none([1, 2, 3, 4], (x) => x > 10); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.none((x) => x > 10),
); // true
```

### partition

```ts
function Array.partition<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): [T[], T[]]
```

Splits `array` into two arrays based on the `predicate` function, returning a tuple where the first array contains elements that satisfy the predicate and the second contains those that don't.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.partition([1, 2, 3, 4, 5], (x) => x % 2 === 0); // [[2, 4], [1, 3, 5]]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4, 5],
    Array.partition((x) => x % 2 === 0),
); // [[2, 4], [1, 3, 5]]
```

### prepend

```ts
function Array.prepend<T>(
    target: readonly T[],
    value: NoInfer<T>,
): T[]
```

Adds `value` to the beginning of `array`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.prepend([2, 3, 4], 1); // [1, 2, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([2, 3, 4], Array.prepend(1)); // [1, 2, 3, 4]
```

### random

```ts
function Array.random<T>(target: readonly T[]): T | undefined
```

Returns a random element from `array`, or `undefined` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.random([1, 2, 3, 4]); // 2 (random)
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.random()); // 2 (random)
```

### randomOr

```ts
function Array.randomOr<T, U>(target: readonly T[], or: U): T | U
```

Returns a random element from `array`, or `fallback` if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.randomOr([1, 2, 3, 4], 0); // 2 (random)
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.randomOr(0)); // 2 (random)
```

### randomOrElse

```ts
function Array.randomOrElse<T, U>(
    target: readonly T[],
    orElse: (target: readonly NoInfer<T>[]) => U,
): T | U
```

Returns a random element from `array`, or the result of calling `callback` with the array if the array is empty.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.randomOrElse([1, 2, 3, 4], (arr) => arr.length); // 2 (random)
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.randomOrElse((arr) => arr.length),
); // 2 (random)
```

### reduce

```ts
function Array.reduce<T, U>(
    target: readonly T[],
    acc: U,
    reducer: (
        acc: NoInfer<U>,
        value: NoInfer<T>,
        idx: number,
        target: readonly NoInfer<T>[],
    ) => NoInfer<U>,
): U
```

Reduces `array` to a single value by executing the `reducer` function on each element, starting with the `initial` accumulator value.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.reduce([1, 2, 3, 4], 0, (acc, x) => acc + x); // 10
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.reduce(0, (acc, x) => acc + x),
); // 10
```

### reject

```ts
function Array.reject<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): readonly T[]
```

Returns a new array with elements from `array` that do not satisfy the provided `predicate` function.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.reject([1, 2, 3, 4, 5], (x) => x % 2 === 0); // [1, 3, 5]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4, 5],
    Array.reject((x) => x % 2 === 0),
); // [1, 3, 5]
```

### remove

```ts
function Array.remove<T>(
    target: readonly T[],
    value: NoInfer<T>,
): readonly T[]
```

Removes the first occurrence of `value` from `target` array. If the value is not found, returns the original array unchanged.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.remove([1, 2, 3, 2], 2); // [1, 3, 2]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.remove(2)); // [1, 3, 2]
```

### removeAll

```ts
function Array.removeAll<T, const U extends T>(
    target: readonly T[],
    values: Iterable<U>,
): IsLiteral<U> extends true
    ? readonly Exclude<T, U>[]
    : readonly T[]
```

Removes all occurrences of each value in `values` from `target` array. If no values are found, returns the original array unchanged.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeAll([1, 2, 3, 2, 4], [2, 4]); // [1, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2, 4], Array.removeAll([2, 4])); // [1, 3]
```

### removeAt

```ts
function Array.removeAt<T>(
    target: readonly T[],
    idx: number,
): readonly T[]
```

Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, returns the original array unchanged.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeAt([1, 2, 3, 4], 1); // [1, 3, 4]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.removeAt(1)); // [1, 3, 4]
```

### removeAtOr

```ts
function Array.removeAtOr<T, U>(
    target: readonly T[],
    idx: number,
    or: U,
): T[] | U
```

Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, returns the fallback value `or`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeAtOr([1, 2, 3], 1, []); // [1, 3]
Array.removeAtOr([1, 2, 3], 5, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.removeAtOr(1, [])); // [1, 3]
pipe([1, 2, 3], Array.removeAtOr(5, [])); // []
```

### removeAtOrElse

```ts
function Array.removeAtOrElse<T, U>(
    target: readonly T[],
    idx: number,
    orElse: (target: readonly NoInfer<T>[]) => U,
): T[] | U
```

Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, calls the `orElse` function with the original array and returns its result.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeAtOrElse([1, 2, 3], 1, () => []); // [1, 3]
Array.removeAtOrElse([1, 2, 3], 5, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.removeAtOrElse(1, () => []),
); // [1, 3]

pipe(
    [1, 2, 3],
    Array.removeAtOrElse(5, (arr) => arr),
); // [1, 2, 3]
```

### removeAtOrThrow

```ts
function Array.removeAtOrThrow<T>(
    target: readonly T[],
    idx: number,
): T[]
```

Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, throws an error.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeAtOrThrow([1, 2, 3], 1); // [1, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.removeAtOrThrow(1)); // [1, 3]
```

### removeLast

```ts
function Array.removeLast<T>(
    target: readonly T[],
    value: NoInfer<T>,
): readonly T[]
```

Removes the last occurrence of `value` from `target` array. If the value is not found, returns the original array unchanged.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeLast([1, 2, 3, 2], 2); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.removeLast(2)); // [1, 2, 3]
```

### removeLastOr

```ts
function Array.removeLastOr<T, U>(
    target: readonly T[],
    value: NoInfer<T>,
    or: U,
): T[] | U
```

Removes the last occurrence of `value` from `target` array. If the value is not found, returns the fallback value `or`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeLastOr([1, 2, 3, 2], 2, []); // [1, 2, 3]
Array.removeLastOr([1, 2, 3], 4, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.removeLastOr(2, [])); // [1, 2, 3]
pipe([1, 2, 3], Array.removeLastOr(4, [])); // []
```

### removeLastOrElse

```ts
function Array.removeLastOrElse<T, U>(
    target: readonly T[],
    value: NoInfer<T>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): T[] | U
```

Removes the last occurrence of `value` from `target` array. If the value is not found, calls the `orElse` function with the original array and returns its result.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeLastOrElse([1, 2, 3, 2], 2, () => []); // [1, 2, 3]
Array.removeLastOrElse([1, 2, 3], 4, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 2],
    Array.removeLastOrElse(2, () => []),
); // [1, 2, 3]

pipe(
    [1, 2, 3],
    Array.removeLastOrElse(4, (arr) => arr),
); // [1, 2, 3]
```

### removeLastOrThrow

```ts
function Array.removeLastOrThrow<T>(
    target: readonly T[],
    value: NoInfer<T>,
): T[]
```

Removes the last occurrence of `value` from `target` array. If the value is not found, throws an error.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeLastOrThrow([1, 2, 3, 2], 2); // [1, 2, 3]
Array.removeLastOrThrow([1, 2, 3], 4); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.removeLastOrThrow(2)); // [1, 2, 3]
pipe([1, 2, 3], Array.removeLastOrThrow(4)); // throws FnError
```

### removeOrElse

```ts
function Array.removeOrElse<T, U>(
    target: readonly T[],
    value: NoInfer<T>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): T[] | U
```

Removes the first occurrence of `value` from `target` array. If the value is not found, calls the `orElse` function with the original array and returns its result.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeOrElse([1, 2, 3, 2], 2, () => []); // [1, 3, 2]
Array.removeOrElse([1, 2, 3], 4, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 2],
    Array.removeOrElse(2, () => []),
); // [1, 3, 2]

pipe(
    [1, 2, 3],
    Array.removeOrElse(4, (arr) => arr),
); // [1, 2, 3]
```

### removeOrThrow

```ts
function Array.removeOrThrow<T>(
    target: readonly T[],
    value: NoInfer<T>,
): T[]
```

Removes the first occurrence of `value` from `target` array. If the value is not found, throws an error.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.removeOrThrow([1, 2, 3, 2], 2); // [1, 3, 2]
Array.removeOrThrow([1, 2, 3], 4); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.removeOrThrow(2)); // [1, 3, 2]
pipe([1, 2, 3], Array.removeOrThrow(4)); // throws FnError
```

### replace

```ts
function Array.replace<T>(
    target: readonly T[],
    value: NoInfer<T>,
    replacement: NoInfer<T>,
): readonly T[]
```

Replaces the first occurrence of `value` with `replacement` in `target` array. If the value is not found or if value and replacement are the same, returns the original array unchanged.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replace([1, 2, 3, 2], 2, 5); // [1, 5, 3, 2]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.replace(2, 5)); // [1, 5, 3, 2]
```

### replaceLast

```ts
function Array.replaceLast<T>(
    target: readonly T[],
    value: NoInfer<T>,
    replacement: NoInfer<T>,
): readonly T[]
```

Replaces the last occurrence of `value` with `replacement` in `target` array. If the value is not found or if value and replacement are the same, returns the original array unchanged.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceLast([1, 2, 3, 2], 2, 5); // [1, 2, 3, 5]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.replaceLast(2, 5)); // [1, 2, 3, 5]
```

### replaceLastOr

```ts
function Array.replaceLastOr<T, U>(
    target: readonly T[],
    value: NoInfer<T>,
    replacement: NoInfer<T>,
    or: U,
): readonly T[] | U
```

Replaces the last occurrence of `value` with `replacement` in `target` array. If the value is not found, returns the fallback value `or`. If value and replacement are the same, returns the original array unchanged.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceLastOr([1, 2, 3, 2], 2, 5, []); // [1, 2, 3, 5]
Array.replaceLastOr([1, 2, 3], 4, 5, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.replaceLastOr(2, 5, [])); // [1, 2, 3, 5]
pipe([1, 2, 3], Array.replaceLastOr(4, 5, [])); // []
```

### replaceLastOrElse

```ts
function Array.replaceLastOrElse<T, U>(
    target: readonly T[],
    value: NoInfer<T>,
    replacement: NoInfer<T>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): readonly T[] | U
```

Replaces the last occurrence of `value` in `target` with `replacement`. If `value` is not found, calls `orElse` with the original array.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceLastOrElse([1, 2, 3, 2], 2, 9, () => []); // [1, 2, 3, 9]
Array.replaceLastOrElse([1, 2, 3], 4, 9, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 2],
    Array.replaceLastOrElse(2, 9, () => []),
); // [1, 2, 3, 9]

pipe(
    [1, 2, 3],
    Array.replaceLastOrElse(4, 9, (arr) => arr),
); // [1, 2, 3]
```

### replaceLastOrThrow

```ts
function Array.replaceLastOrThrow<T>(
    target: readonly T[],
    value: NoInfer<T>,
    replacement: NoInfer<T>,
): readonly T[]
```

Replaces the last occurrence of `value` in `target` with `replacement`. If `value` is not found, throws an error.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceLastOrThrow([1, 2, 3, 2], 2, 9); // [1, 2, 3, 9]
Array.replaceLastOrThrow([1, 2, 3], 4, 9); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.replaceLastOrThrow(2, 9)); // [1, 2, 3, 9]
pipe([1, 2, 3], Array.replaceLastOrThrow(4, 9)); // throws FnError
```

### replaceOr

```ts
function Array.replaceOr<T, U>(
    target: readonly T[],
    value: NoInfer<T>,
    replacement: NoInfer<T>,
    or: U,
): readonly T[] | U
```

Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, returns `or`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceOr([1, 2, 3, 2], 2, 9, []); // [1, 9, 3, 2]
Array.replaceOr([1, 2, 3], 4, 9, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.replaceOr(2, 9, [])); // [1, 9, 3, 2]
pipe([1, 2, 3], Array.replaceOr(4, 9, [])); // []
```

### replaceOrElse

```ts
function Array.replaceOrElse<T, U>(
    target: readonly T[],
    value: NoInfer<T>,
    replacement: NoInfer<T>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): readonly T[] | U
```

Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, calls `orElse` with the original array.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceOrElse([1, 2, 3, 2], 2, 9, () => []); // [1, 9, 3, 2]
Array.replaceOrElse([1, 2, 3], 4, 9, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 2],
    Array.replaceOrElse(2, 9, () => []),
); // [1, 9, 3, 2]

pipe(
    [1, 2, 3],
    Array.replaceOrElse(4, 9, (arr) => arr),
); // [1, 2, 3]
```

### replaceOrThrow

```ts
function Array.replaceOrThrow<T>(
    target: readonly T[],
    value: NoInfer<T>,
    replacement: NoInfer<T>,
): readonly T[]
```

Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, throws an error.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.replaceOrThrow([1, 2, 3, 2], 2, 9); // [1, 9, 3, 2]
Array.replaceOrThrow([1, 2, 3], 4, 9); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 2], Array.replaceOrThrow(2, 9)); // [1, 9, 3, 2]
pipe([1, 2, 3], Array.replaceOrThrow(4, 9)); // throws FnError
```

### setAt

```ts
function Array.setAt<T>(
    target: readonly T[],
    idx: number,
    value: NoInfer<T>,
): readonly T[]
```

Sets the value at the specified `idx` in `target` to `value`. Returns the original array if the index is out of bounds or the value is already the same.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.setAt([1, 2, 3], 1, 9); // [1, 9, 3]
Array.setAt([1, 2, 3], -1, 9); // [1, 2, 9]
Array.setAt([1, 2, 3], 5, 9); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.setAt(1, 9)); // [1, 9, 3]
pipe([1, 2, 3], Array.setAt(-1, 9)); // [1, 2, 9]
pipe([1, 2, 3], Array.setAt(5, 9)); // [1, 2, 3]
```

### setAtOr

```ts
function Array.setAtOr<T, U>(
    target: readonly T[],
    idx: number,
    value: NoInfer<T>,
    or: U,
): readonly T[] | U
```

Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, returns `or`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.setAtOr([1, 2, 3], 1, 9, []); // [1, 9, 3]
Array.setAtOr([1, 2, 3], -1, 9, []); // [1, 2, 9]
Array.setAtOr([1, 2, 3], 5, 9, []); // []
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.setAtOr(1, 9, [])); // [1, 9, 3]
pipe([1, 2, 3], Array.setAtOr(-1, 9, [])); // [1, 2, 9]
pipe([1, 2, 3], Array.setAtOr(5, 9, [])); // []
```

### setAtOrElse

```ts
function Array.setAtOrElse<T, U>(
    target: readonly T[],
    idx: number,
    value: NoInfer<T>,
    orElse: (target: readonly NoInfer<T>[]) => U,
): readonly T[] | U
```

Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, calls `orElse` with the original array.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.setAtOrElse([1, 2, 3], 1, 9, () => []); // [1, 9, 3]
Array.setAtOrElse([1, 2, 3], -1, 9, () => []); // [1, 2, 9]
Array.setAtOrElse([1, 2, 3], 5, 9, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3],
    Array.setAtOrElse(1, 9, () => []),
); // [1, 9, 3]

pipe(
    [1, 2, 3],
    Array.setAtOrElse(-1, 9, () => []),
); // [1, 2, 9]

pipe(
    [1, 2, 3],
    Array.setAtOrElse(5, 9, (arr) => arr),
); // [1, 2, 3]
```

### setAtOrThrow

```ts
function Array.setAtOrThrow<T>(
    target: readonly T[],
    idx: number,
    value: NoInfer<T>,
): readonly T[]
```

Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, throws an error.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.setAtOrThrow([1, 2, 3], 1, 9); // [1, 9, 3]
Array.setAtOrThrow([1, 2, 3], -1, 9); // [1, 2, 9]
Array.setAtOrThrow([1, 2, 3], 5, 9); // throws FnError
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.setAtOrThrow(1, 9)); // [1, 9, 3]
pipe([1, 2, 3], Array.setAtOrThrow(-1, 9)); // [1, 2, 9]
pipe([1, 2, 3], Array.setAtOrThrow(5, 9)); // throws FnError
```

### shuffle

```ts
function Array.shuffle<T>(target: readonly T[]): T[]
```

Returns a new array with the elements of `array` randomly shuffled.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.shuffle([1, 2, 3, 4]); // [3, 1, 4, 2] (random)
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.shuffle()); // [3, 1, 4, 2] (random)
```

### slice

```ts
function Array.slice<T>(
    target: readonly T[],
    start: number,
    end?: number,
): T[]
```

Extracts a section of `target` array from `start` index to `end` index (exclusive). If `end` is not provided, extracts to the end of the array.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.slice([1, 2, 3, 4, 5], 1, 4); // [2, 3, 4]
Array.slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
Array.slice([1, 2, 3, 4, 5], -2); // [4, 5]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4, 5], Array.slice(1, 4)); // [2, 3, 4]
pipe([1, 2, 3, 4, 5], Array.slice(2)); // [3, 4, 5]
pipe([1, 2, 3, 4, 5], Array.slice(-2)); // [4, 5]
```

### some

```ts
function Array.some<T>(
    target: readonly T[],
    predicate: (
        value: NoInfer<T>,
        index: number,
        target: readonly NoInfer<T>[],
    ) => boolean,
): boolean
```

Returns `true` if at least one element in `array` satisfies the provided `predicate` function, otherwise returns `false`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.some([1, 2, 3, 4], (x) => x > 3); // true
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [1, 2, 3, 4],
    Array.some((x) => x > 3),
); // true
```

### sort

```ts
function Array.sort<T>(
    target: readonly T[],
    comparator: (a: NoInfer<T>, b: NoInfer<T>) => number,
): T[]
```

Returns a new array with the elements of `target` sorted using the provided `comparator` function.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.sort([3, 1, 4, 2], (a, b) => a - b); // [1, 2, 3, 4]
Array.sort(["c", "a", "b"], (a, b) => a.localeCompare(b)); // ['a', 'b', 'c']
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe(
    [3, 1, 4, 2],
    Array.sort((a, b) => a - b),
); // [1, 2, 3, 4]

pipe(
    ["c", "a", "b"],
    Array.sort((a, b) => a.localeCompare(b)),
); // ['a', 'b', 'c']
```

### sum

```ts
function Array.sum(target: readonly number[]): number
```

Returns the sum of all numbers in `array`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.sum([1, 2, 3, 4]); // 10
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4], Array.sum()); // 10
```

### take

```ts
function Array.take<T>(
    target: readonly T[],
    amount: number,
): readonly T[]
```

Returns a new array containing the first `amount` elements from `array`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.take([1, 2, 3, 4, 5], 3); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4, 5], Array.take(3)); // [1, 2, 3]
```

### takeLast

```ts
function Array.takeLast<T>(
    target: readonly T[],
    amount: number,
): readonly T[]
```

Returns a new array containing the last `amount` elements from `array`.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.takeLast([1, 2, 3, 4, 5], 3); // [3, 4, 5]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3, 4, 5], Array.takeLast(3)); // [3, 4, 5]
```

### union

```ts
function Array.union<T>(
    target: readonly T[],
    source: Iterable<NoInfer<T>>,
): readonly T[]
```

Returns a new array containing all unique elements from both `target` and `source`. Elements from `source` that are not already in `target` are added to the result.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.union([1, 2, 3], [3, 4, 5]); // [1, 2, 3, 4, 5]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 3], Array.union([3, 4, 5])); // [1, 2, 3, 4, 5]
```

### unique

```ts
function Array.unique<T>(target: readonly T[]): readonly T[]
```

Returns a new array with only the unique elements from `target`, preserving the order of first occurrence.

#### Example

```ts [data-first]
import { Array } from "@monstermann/array";

Array.unique([1, 2, 2, 3, 1]); // [1, 2, 3]
```

```ts [data-last]
import { Array } from "@monstermann/array";

pipe([1, 2, 2, 3, 1], Array.unique()); // [1, 2, 3]
```
