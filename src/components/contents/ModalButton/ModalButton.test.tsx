import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useEffect } from 'react'
import { ModalProvider } from '../../../context/ModalProvider'
import { useModal } from '../../../hooks/useModal'
import { ModalButtonOptions } from '../../../types'

const TestBox = ({ ...options }: ModalButtonOptions) => {
  const { show, hide } = useModal({ ...options })

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

describe('ModalButton Message Test', () => {
  it('ModalButton Message Render', async () => {
    const MESSAGE = 'This is Test Message'
    const BUTTON_TEXT = 'Test Button'

    const { container } = render(
      <ModalProvider>
        <TestBox buttonText={BUTTON_TEXT} isLoading={false} message={MESSAGE} type="button" />
      </ModalProvider>,
    )

    expect(container).toBeInTheDocument()

    const modalMessage = screen.getByText(MESSAGE)
    expect(modalMessage).toBeInTheDocument()

    await waitForElementToBeRemoved(modalMessage, { timeout: 600 })
    expect(modalMessage).not.toBeInTheDocument()
  })

  it('ModalButton Message Click Show Button', async () => {
    const MESSAGE = 'This is Test Message'
    const BUTTON_TEXT = 'Test Button'

    render(
      <ModalProvider>
        <TestBox buttonText={BUTTON_TEXT} isLoading={false} message={MESSAGE} type="button" />
      </ModalProvider>,
    )

    const modalMessage = screen.getByText(MESSAGE)
    expect(modalMessage).toBeInTheDocument()

    await waitForElementToBeRemoved(modalMessage, { timeout: 600 })
    expect(modalMessage).not.toBeInTheDocument()

    const showButton = screen.getByText('Show')
    expect(showButton).toBeInTheDocument()

    fireEvent.click(showButton)
    const modalMessage2 = screen.getByText(MESSAGE)
    expect(modalMessage2).toBeInTheDocument()
  })

  it('ModalButton Click Hide Button', async () => {
    const MESSAGE = 'This is Test Message'
    const BUTTON_TEXT = 'Test Button'

    render(
      <ModalProvider>
        <TestBox buttonText={BUTTON_TEXT} isLoading={false} message={MESSAGE} type="button" />
      </ModalProvider>,
    )

    const modalMessage = screen.getByText(MESSAGE)
    expect(modalMessage).toBeInTheDocument()

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

  it('ModalButton Button Click', async () => {
    const MESSAGE = 'This is Test Message'
    const BUTTON_TEXT = 'Test Button'
    const handleClick = jest.fn()

    render(
      <ModalProvider>
        <TestBox
          buttonText={BUTTON_TEXT}
          isLoading={false}
          onClickButton={handleClick}
          message={MESSAGE}
          type="button"
        />
      </ModalProvider>,
    )

    const modalMessage = screen.getByText(MESSAGE)
    expect(modalMessage).toBeInTheDocument()

    const modalButton = screen.getByRole('button', { name: 'Test Button' })
    expect(modalButton).toBeInTheDocument()

    fireEvent.click(modalButton)
    // 렌더링 되면서 1번, fireEvent 로 클릭 1번
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
