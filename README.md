# @jaewoong2/modal

## Description

### Very Simple & Easy Modal For You

### Version
- `0.0.1`
- Be `1.0.0` When This Todo will Be Done.
### Storybook
- https://bit.ly/3yQGzkZ
---
## Installation

### yarn
```
$ yarn add @jaewoong2/modal
```
### npm

```
$ npm i @jaewoong2/modal
```

---
## Usage

### Declaration

```ts
import { ModalProvider, useModalButton, useModalNormal, useModalText} from "@jaewoong2/modal"

```

### Provider

```tsx
import { ModalProvider } from '@jaewoong2/modal'

const App = () => {
   return (
      <ModalProvider>
         <RootComponent />
      </ModalProvider>
   )
}
```

### useModalNormal Call
```tsx
import { useModalNormal } from "@jaewoong2/modal"

const ChildComponent = ({ options }) => {
   const { show, hide } = useModalNormal({  ...options })

   return (
      <button onClick={show}>SHOW</button>
      <button onClick={hide}>HIDE</button>
   )
}
```

### useModalText Call
``` tsx
import { useModalText } from "@jaewoong2/modal"

const ChildComponent = ({ options }) => {
   const { show, hide } = useModalText({  ...options })

   return (
      <button onClick={show}>SHOW</button>
      <button onClick={hide}>HIDE</button>
   )
}
```

### useModalButton Call
``` tsx
import { useModalButton } from "@jaewoong2/modal"

const ChildComponent = ({ options }) => {
   const { show, hide } = useModalButton({  ...options })

   return (
      <button onClick={show}>SHOW</button>
      <button onClick={hide}>HIDE</button>
   )
}
```

---
## Modals Options

### useModalNormal Options
```ts
type ModalNoramlOptions = {
  src?: string
  isLoading?: boolean
  modalWidth?: string
  borderRadius?: string

  message?: React.ReactNode
  header?: React.ReactNode
  footerLeftText?: React.ReactNode
  footerRightText?: React.ReactNode

  onClickFooterLeft?: () => void
  onClickFooterRight?: () => void
}
```

### useModalText Options

```ts
type ModalTextOptions = {
  borderRadius?: string
  isLoading?: boolean
  message?: React.ReactNode
  header?: React.ReactNode
  buttonText?: string
  modalWidth?: string
  types: 'normal' | 'primary' | 'warn'
  description?: React.ReactNode
  onClickButton?: () => void
}
```

### useModalButton Options

```ts
type ModalButtonOptions = {
  types?: 'primary' | 'warn'
  src?: string
  borderRadius?: string
  isLoading?: boolean
  buttonText?: string
  message?: React.ReactNode
  header?: React.ReactNode
  modalWidth?: string
  onClickButton?: () => void
}
```

---
## Next Todo
1. ~~Deployment / Publish~~
2. ~~StroyBook Hosting~~
3. Document Writing
4. Options (By Priority)
---

### Build by Rollup
### Style by Emotion
### Test by Storybook
### Use For React