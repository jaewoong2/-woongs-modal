import React, { useCallback } from 'react'
import { Divider } from '../../atoms/Divider'
import { TextButton } from '../../atoms/TextButton'
import ModalBasic from '../../blocks/ModalBasic'
import ModalBody from '../../blocks/ModalBody'
import ModalFooter from '../../blocks/ModalFooter'

type Props = {
  header: React.ReactNode
  message: React.ReactNode
  isLoading: boolean

  footerRightText: React.ReactNode
  onClickFooterRight?: () => void

  footerLeftText: React.ReactNode
  onClickFooterLeft: () => void

  setHide: () => void

  src?: string
  modalWidth?: string
  borderRaidus?: string
}

const Modal: React.FC<Props> = ({
  setHide,
  header,
  message,
  isLoading,
  src,
  borderRaidus,
  modalWidth,
  footerRightText,
  footerLeftText,
  onClickFooterRight,
  onClickFooterLeft,
}) => {
  const handleModalView = useCallback((e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e?.target === e?.currentTarget) {
      setHide()
    }
  }, [])

  const handleLeftTextButton = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (typeof onClickFooterLeft === 'function') {
        onClickFooterLeft()
      }
      handleModalView(e)
    },
    [onClickFooterLeft],
  )

  return (
    <ModalBasic
      borderRaidus={borderRaidus}
      header={header}
      modalWidth={modalWidth}
      setHide={setHide}
      body={<ModalBody isLoading={isLoading} src={src} alt={`${header}`} message={message} />}
      footer={
        <ModalFooter>
          <ModalFooter.Button
            controls={
              <>
                <TextButton color={'#ff0000'} onClick={handleLeftTextButton}>
                  {footerLeftText}
                </TextButton>
                <Divider width="1px" height="1.2em" />
                <TextButton color={'#3e79ff'} onClick={onClickFooterRight}>
                  {footerRightText}
                </TextButton>
              </>
            }
          />
        </ModalFooter>
      }
    />
  )
}

export default Modal
