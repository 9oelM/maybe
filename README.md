# maybe

```bash
npm i --save @9oelm/maybe

yarn add @9oelm/maybe
```

Just my personal util for handling `null` and `undefined`.

## Usage

```ts
import { maybe } from '@9oelm/maybe'

const mayBeNullOrUndefined: HTMLElement | null = document.querySelector('#maybe-exists');

const text: string = 
  maybe(maybeNullOrUndefined)
  .then(({ innerText }) => innerText)
  .otherwise(`please fill out text first`);

// omit .then to just receive the defined value itself
const someHTMLElementOrMyFallbackHtmlElement: HTMLElement = 
  maybe(mayBeNullOrUndefined).otherwise(document.createElement('div'))
```