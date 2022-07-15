# [회고] DX 가 좋은 Custom Hook (useModal) 만들기 feat. 함수 오버로딩

## 자바스크립트에는 없는 타입스크립트만의 Function Oveloading

### DX 란?
`DX`란, `Developer Experience` 의 약자 입니다. 

`@jaewoong2/modal`은, 자바스크립트 라이브러리 로서 개발자 경험에 좋은 라이브러리를 개발을 해야한다고 생각하였습니다.


### 고려한 DX?

먼저, `React Custom Hooks 라이브러리 `인 `@jaewoong2/modal` 을 제작 할때, 커스텀 훅(`useModal`)하나로 개발자가 사용하고 싶은 모달창을 보여줄 수 있도록 하고 싶었습니다.

또한, 본인이 원하는 뷰가 있는 개발자를 위해서 조금더 자유도를 높이고 싶었습니다.


### 자유도 있는 라이브러리

`Button`, `Message`, `Description` 들을 본인이 원하는 React Component 를 사용 할 수 있도록 타입을 `React.ReactNode` 로 정의 함으로써 해결 하였습니다.


### 하나의 훅?

처음에, 해당 라이브러리를 제작 하였을 때, 
`useModalNormal`
`useModalButton`
`useModalText` 로 나누어서 3개의 훅으로 나누어 사용 할 수 있도록 하였습니다. 또한, 빌드 파일에서도 해당 커스텀 훅이 빌드 되도록 하였습니다.

이렇게 했을 때, 개발자는 3가지의 커스텀 훅에 대해서 `import` 해서 사용 해야 했습니다.

저는 이것이 `DX` 에 좋지 않다고 생각해서, `useModal` 하나만을 사용해서 위의 3가지 기능을 담을 수 있도록 `function overloading` 을 하였습니다.

```ts
type ReturnUseModalType = { show: () => void; hide: () => void }

function useModal(type: 'normal', opions: ModalNormalOptions): ReturnUseModalType
function useModal(type: 'button', opions: ModalButtonOptions): ReturnUseModalType
function useModal(type: 'text', opions: ModalTextOptions): ReturnUseModalType
function useModal(type: ModalType, options: ModalNormalOptions | ModalButtonOptions | ModalTextOptions) {
  if (type === 'button') {
    return useModalButton({ ...InitialModalBasicValue, ...InitialModalButtonValue, ...options })
  }

  if (type === 'normal') {
    return useModalNormal({ ...InitialModalBasicValue, ...InitialModalNormalValue, ...options })
  }

  if (type === 'text') {
    return useModalText({ ...InitialModalBasicValue, ...InitialModalTextValue, ...options })
  }

  return { show: () => {}, hide: () => {} }
}

export { useModal }
```


### function overloading

function overloading은, 타입스크립트 내에서만 가능 하며 화살표 함수가 아닌 function 으로 함수를 선언 했을때 가능 합니다.


### 결론

`DX` 라는 말로 거창하게 포장하였지만, 사실 제가 `useModal('normal', options)` 등으로 호출해서 사용하고 싶어하였고, 이것이 `DX`라 생각하였기 때문에 회고를 작성 하였습니다.

