import { ModalButtonOptions, ModalNormalOptions, ModalTextOptions } from './../types/index'
export const InitialModalBasicValue = {
  isLoading: false,
  borderRadius: '8px',
  modalWidth: '450px',
  message: 'Modal Message',
  header: '',
}

export const InitialModalButtonValue: ModalButtonOptions = {
  buttonType: 'primary',
  src: '',
  buttonText: 'Button Text',
  onClickButton: () => {},
}

export const InitialModalNormalValue: ModalNormalOptions = {
  src: '',
  footerLeftText: '닫기',
  footerRightText: '확인',
  onClickFooterLeft: () => {},
  onClickFooterRight: () => {},
}

export const InitialModalTextValue: ModalTextOptions = {
  description: 'Descriptions',
  buttonType: 'primary',
  buttonText: 'Button Text',
  onClickButton: () => {},
}
