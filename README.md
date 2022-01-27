# my-lib [![Tests](https://github.com/syropian/vue-3-package-skeleton/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/syropian/vue-3-package-skeleton/actions/workflows/test.yml)

A description of your new library.

## Install

```bash
$ npm install my-lib --save
# or...
$ yarn add my-lib
```

_or_

Use the UMD build from [Unpkg](https://unpkg.com/my-lib), available as `MyLib` in the global scope.

```html
<script src="/vendor/vue.js" />
<script src="https://unpkg.com/my-lib" />
```

### Globally

Import and register the module as a plugin.

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import MyLib from 'my-lib'

createApp(App).use(MyLib).mount('#app')
```

### Per-component

```javascript
import { MyLib } from 'my-lib'

export default {
  components: { MyLib },
  setup() {
    ...
  },
}
```

## Usage

Usage instructions here.

## License

MIT © [Collin Henderson](https://github.com/syropian)
