import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useEffect } from 'react'
import { ModalTextOptions, useModalText } from '../../../hooks/useModalText'
import { ModalProvider } from '../../../context/ModalProvider'

const TestBox = ({ ...options }: ModalTextOptions) => {
  const { show, hide } = useModalText({ ...options })

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

describe('ModalText Message Test', () => {
  it('ModalText Message Render', async () => {
    const MESSAGE = 'This is Test Message'
    const DESCRIPTION = 'This Is Test Description'
    const BUTTON_TEXT = 'Test Button'

    const { container } = render(
      <ModalProvider>
        <TestBox buttonText={BUTTON_TEXT} isLoading={false} description={DESCRIPTION} message={MESSAGE} />
      </ModalProvider>,
    )

    expect(container).toBeInTheDocument()

    const modalMessage = screen.getByText(MESSAGE)
    expect(modalMessage).toBeInTheDocument()

    await waitForElementToBeRemoved(modalMessage, { timeout: 600 })
    expect(modalMessage).not.toBeInTheDocument()
  })

  it('ModalText Message Click Show Button', async () => {
    const MESSAGE = 'This is Test Message'
    const DESCRIPTION = 'This Is Test Description'
    const BUTTON_TEXT = 'Test Button'

    render(
      <ModalProvider>
        <TestBox buttonText={BUTTON_TEXT} isLoading={false} description={DESCRIPTION} message={MESSAGE} />
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

  it('ModalText Click Hide Button', async () => {
    const MESSAGE = 'This is Test Message'
    const DESCRIPTION = 'This Is Test Description'
    const BUTTON_TEXT = 'Test Button'

    render(
      <ModalProvider>
        <TestBox buttonText={BUTTON_TEXT} isLoading={false} description={DESCRIPTION} message={MESSAGE} />
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

  it('ModalText Button Click', async () => {
    const MESSAGE = 'This is Test Message'
    const DESCRIPTION = 'This Is Test Description'
    const BUTTON_TEXT = 'Test Button'
    const handleClick = jest.fn()

    render(
      <ModalProvider>
        <TestBox
          buttonText={BUTTON_TEXT}
          isLoading={false}
          onClickButton={handleClick}
          description={DESCRIPTION}
          message={MESSAGE}
        />
      </ModalProvider>,
    )

    const modalMessage = screen.getByText(MESSAGE)
    expect(modalMessage).toBeInTheDocument()

    const modalButton = screen.getByRole('button', { name: 'Test Button' })
    expect(modalButton).toBeInTheDocument()

    fireEvent.click(modalButton)
    // 렌더링 되면서 1번, fireEvent 로 클릭 1번
    expect(handleClick).toHaveBeenCalledTimes(2)
  })
})
