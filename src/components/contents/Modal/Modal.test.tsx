import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useEffect } from 'react'
import { ModalNoramlOptions, useModalNormal } from '../../../hooks/useModalNormal'
import { ModalProvider } from '../../../context/ModalProvider'

const TestBox = ({ ...options }: ModalNoramlOptions) => {
  const { show, hide } = useModalNormal({ ...options })

  useEffect(() => {
    show()

    const timer = setTimeout(() => {
      hide()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <button onClick={show}>Show</button>
      <button onClick={hide}>Hide</button>
    </div>
  )
}

describe('ModalNormal Message Test', () => {
  it('ModalNormal Message Render', async () => {
    const MESSAGE = 'This is Test Message'
    const LEFT = 'Cancle'
    const RIGHT = 'OK'

    const { container } = render(
      <ModalProvider>
        <TestBox footerLeftText={LEFT} footerRightText={RIGHT} isLoading={false} message={MESSAGE} />
      </ModalProvider>,
    )

    expect(container).toBeInTheDocument()

    const modalMessage = screen.getByText(MESSAGE)
    expect(modalMessage).toBeInTheDocument()

    const left = screen.getByText(LEFT)
    expect(left).toBeInTheDocument()

    const right = screen.getByText(RIGHT)
    expect(right).toBeInTheDocument()

    await waitForElementToBeRemoved(modalMessage, { timeout: 600 })
    expect(modalMessage).not.toBeInTheDocument()
  })

  it('ModalNormal Message Click Show Button', async () => {
    const MESSAGE = 'This is Test Message'
    const LEFT = 'Cancle'
    const RIGHT = 'OK'

    const { container } = render(
      <ModalProvider>
        <TestBox footerLeftText={LEFT} footerRightText={RIGHT} isLoading={false} message={MESSAGE} />
      </ModalProvider>,
    )

    expect(container).toBeInTheDocument()

    const modalMessage = screen.getByText(MESSAGE)
    expect(modalMessage).toBeInTheDocument()

    const left = screen.getByText(LEFT)
    expect(left).toBeInTheDocument()

    const right = screen.getByText(RIGHT)
    expect(right).toBeInTheDocument()

    await waitForElementToBeRemoved(modalMessage, { timeout: 600 })
    expect(modalMessage).not.toBeInTheDocument()

    const showButton = screen.getByText('Show')
    expect(showButton).toBeInTheDocument()

    fireEvent.click(showButton)
    const modalMessage2 = screen.getByText(MESSAGE)
    expect(modalMessage2).toBeInTheDocument()
  })

  it('ModalNormal Click Hide Button', async () => {
    const MESSAGE = 'This is Test Message'
    const LEFT = 'Cancle'
    const RIGHT = 'OK'

    const { container } = render(
      <ModalProvider>
        <TestBox footerLeftText={LEFT} footerRightText={RIGHT} isLoading={false} message={MESSAGE} />
      </ModalProvider>,
    )

    expect(container).toBeInTheDocument()

    const modalMessage = screen.getByText(MESSAGE)
    expect(modalMessage).toBeInTheDocument()

    const left = screen.getByText(LEFT)
    expect(left).toBeInTheDocument()

    const right = screen.getByText(RIGHT)
    expect(right).toBeInTheDocument()

    await waitForElementToBeRemoved(modalMessage, { timeout: 600 })
    expect(modalMessage).not.toBeInTheDocument()

    const showButton = screen.getByText('Show')
    expect(showButton).toBeInTheDocument()

    fireEvent.click(showButton)
    const modalMessage2 = screen.getByText(MESSAGE)
    expect(modalMessage2).toBeInTheDocument()

    const hideButton = screen.getByText('Hide')
    expect(hideButton).toBeInTheDocument()

    fireEvent.click(hideButton)
    expect(modalMessage2).not.toBeInTheDocument()
  })

  it('ModalNormal Right Button Click', async () => {
    const handleClick = jest.fn()
    const MESSAGE = 'This is Test Message'
    const LEFT = 'Cancle'
    const RIGHT = 'OK'

    const { container } = render(
      <ModalProvider>
        <TestBox
          footerLeftText={LEFT}
          footerRightText={RIGHT}
          onClickFooterRight={handleClick}
          isLoading={false}
          message={MESSAGE}
        />
      </ModalProvider>,
    )

    expect(container).toBeInTheDocument()

    const modalMessage = screen.getByText(MESSAGE)
    expect(modalMessage).toBeInTheDocument()

    const left = screen.getByText(LEFT)
    expect(left).toBeInTheDocument()

    const right = screen.getByText(RIGHT)
    expect(right).toBeInTheDocument()

    const ModalNormal = screen.getByRole('button', { name: 'OK' })
    expect(ModalNormal).toBeInTheDocument()

    fireEvent.click(ModalNormal)
    // 렌더링 되면서 1번, fireEvent 로 클릭 1번
    expect(handleClick).toHaveBeenCalledTimes(2)
  })
})
