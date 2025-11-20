---
aside: true
---

# array

<Badge type="info" class="size">
    <span>Minified</span>
    <span>17.38 KB</span>
</Badge>

<Badge type="info" class="size">
    <span>Minzipped</span>
    <span>3.39 KB</span>
</Badge>

**Functional utilities for arrays.**

## Features

- Opt-in mutability with [`remmi`](https://michaelostermann.github.io/remmi/)
- Reference preservation (`filter(array, () => true) === array`)
- Pipe-friendly (`pipe(filter(() => true))(array)`)
- Graceful failure handling (`at()`, `atOr()`, `atOrElse()`, `atOrThrow()`)

## Installation

::: code-group

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

:::

## Tree-shaking

### Installation

::: code-group

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

:::

### Usage

::: code-group

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

:::
