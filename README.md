# @jaewoong2/modal

## Description

### Very Simple & Easy Modal For You

### Version
- `0.1.6`
- Be `1.0.0` When This Todo will Be Done.
  
### Storybook
- https://bit.ly/3IDGhB7
  
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
## Prototype Image

<img width="60%" src="https://velog.velcdn.com/images/jwisgenius/post/e1fbd3df-ea2f-41d3-9ae0-9334305e7ab8/image.png"/>

- `useModal('normal', options)`

<img width="60%" src="https://velog.velcdn.com/images/jwisgenius/post/b55296ba-685f-45f8-990d-565ec59fa1a3/image.png"/>

- `useModal('button', options)`

<img width="60%" src="https://velog.velcdn.com/images/jwisgenius/post/0fc2f93c-af6a-418b-bb8c-ae85e2e3b7f8/image.png"/>

- `useModal('text', options)`

<img width="60%" src="https://velog.velcdn.com/images/jwisgenius/post/ce7ebc0e-455f-45bd-9cf2-d479b94a5c83/image.png"/>

- You Can set Button Type by setting options `{ ...options, buttonType: 'primary' }`

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
import { useModal } from "@jaewoong2/modal"

const ChildComponent = ({ options }) => {
   const { show, hide } = useModal('normal', {  ...options })

   return (
      <button onClick={show}>SHOW</button>
      <button onClick={hide}>HIDE</button>
   )
}
```

### useModalText Call
``` tsx
import { useModal } from "@jaewoong2/modal"

const ChildComponent = ({ options }) => {
   const { show, hide } = useModal('text', {  ...options })

   return (
      <button onClick={show}>SHOW</button>
      <button onClick={hide}>HIDE</button>
   )
}
```

### useModalButton Call
``` tsx
import { useModal } from "@jaewoong2/modal"

const ChildComponent = ({ options }) => {
   const { show, hide } = useModal('button', {  ...options })

   return (
      <button onClick={show}>SHOW</button>
      <button onClick={hide}>HIDE</button>
   )
}
```

---
## Modals Options

### Modal Basic Options
```ts
type ModalBasicOptions = {
  isLoading?: boolean
  borderRadius?: string
  modalWidth?: string
  message?: React.ReactNode
  header?: React.ReactNode
}
```

### useModalNormal Options
```ts
type ModalNormalOptions = {
  src?: string

  footerLeftText?: React.ReactNode
  footerRightText?: React.ReactNode

  onClickFooterLeft?: () => void
  onClickFooterRight?: () => void
} & ModalBasicOptions
```

### useModalText Options

```ts
type ModalTextOptions = {
  buttonType?: ButtonType
  buttonText?: string
  description?: React.ReactNode

  onClickButton?: () => void
} & ModalBasicOptions
```

### useModalButton Options

```ts
type ModalButtonOptions = {
  buttonType?: ButtonType
  src?: string
  buttonText?: string
  onClickButton?: () => void
} & ModalBasicOptions
```

## UX / A11Y

### Defferd Component

- ???????????? ???????????? 200ms ?????? ?????? ???????????? ?????????, ???????????? ???????????? ?????????
- 200ms ?????? ?????? ????????? ??????, ???????????? ???????????? ???????????? ?????? Component
- Reference - https://tech.kakaopay.com/post/skeleton-ui-idea/


### Skeleton Component

- Image Skeleton Component
- Message Skeleton Component
- Description Skeleton Component


### For A11y Tags and Attributes
- Image(Alt)
- role="dialog"
- aria-label="modal"
- Modal Close Button
- setting tabIndex

### Documents

- [?????? ????????? ?????? ??????????????? ???????????? ??????](/docs/%EC%9C%A0%EC%A7%80%EB%B3%B4%EC%88%98%EA%B0%80_%EC%89%AC%EC%9A%B4_%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8.md)

- [`DX` ??? ?????? `Custom Hook (useModal)` ????????? (?????? ????????????)](/docs/DX%20???%20??????%20Custom%20Hook%20(useModal)%20?????????%20(??????%20????????????).md)


---
## Next Todo
1. ~~Deployment / Publish~~
2. ~~StroyBook Hosting~~
3. Document Writing
4. Options (By Priority)
---

- Patch
  - ?????? ??????, ?????? ??????

- Minor
  - ?????? ??????

- Major
   - ?????? ?????? ??? ???????????? ???, ?????? ????????? ?????? ?????? ?????? ??? ??? ?????? ?????? Major ????????????

---

### Build by Rollup
### Style by Emotion
### Test by Storybook
### Use For React