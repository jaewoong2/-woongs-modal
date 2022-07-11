# @jaewoong2/modal

## Description

### Very Simple & Easy Modal For You

### Version
- `0.1.0`
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
## Image

<img width="60%" src="https://velog.velcdn.com/images/jwisgenius/post/e1fbd3df-ea2f-41d3-9ae0-9334305e7ab8/image.png"/>

<img width="60%" src="https://velog.velcdn.com/images/jwisgenius/post/b55296ba-685f-45f8-990d-565ec59fa1a3/image.png"/>

<img width="60%" src="https://velog.velcdn.com/images/jwisgenius/post/0fc2f93c-af6a-418b-bb8c-ae85e2e3b7f8/image.png"/>

<img width="60%" src="https://velog.velcdn.com/images/jwisgenius/post/ce7ebc0e-455f-45bd-9cf2-d479b94a5c83/image.png"/>

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
  buttonType: 'normal' | 'primary' | 'warn'
  description?: React.ReactNode
  onClickButton?: () => void
}
```

### useModalButton Options

```ts
type ModalButtonOptions = {
  buttonType?: 'primary' | 'warn'
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

## UX / A11Y

### Defferd Component

- 스켈레톤 이미지가 200ms 보다 짧게 보여지게 된다면, 사용성이 떨어지기 때문에
- 200ms 보다 길게 로딩이 되면, 스켈레톤 이미지가 보여지게 하는 Component
- Reference - https://tech.kakaopay.com/post/skeleton-ui-idea/


### Skeleton Component

- Image Skeleton Component
- Message Skeleton Component
- Description Skeleton Component


### For A11y Tags and Attributes

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