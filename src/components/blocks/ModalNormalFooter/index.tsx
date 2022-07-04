import React from 'react'
import { Container, Left, Right } from './ModalNormalFooter'

type Props = {
  onClickFooterLeft?: () => void
  onClickFooterRight?: () => void
  closeModal: () => void
  footerLeftText: React.ReactNode
  footerRightText: React.ReactNode
}

const ModalNormalFooter: React.FC<Props> = ({
  onClickFooterLeft,
  onClickFooterRight,
  footerLeftText,
  footerRightText,
  closeModal,
}) => {
  return (
    <Container>
      <Left
        onClick={() => {
          if (typeof onClickFooterLeft === 'function') {
            onClickFooterLeft()
          }
          closeModal()
        }}
        className={'footer-btn ' + `${Boolean(footerLeftText) ? 'divider' : ''}`}
      >
        {footerLeftText}
      </Left>
      <Right onClick={onClickFooterRight} className="footer-btn">
        {footerRightText}
      </Right>
    </Container>
  )
}

export default ModalNormalFooter
