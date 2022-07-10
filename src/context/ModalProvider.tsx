import { createContext, useEffect, useMemo, useState } from 'react'
import { ModalType } from '../types'
import { ModalButtonProvider } from './ModalButtonProvider'
import { ModalNormalProvider } from './ModalNormalProvider'
import { ModalTextProvider } from './ModalTextProvider'

type ModalProviderProps = {
  children: React.ReactNode
}

type ModalActionContextType = {
  setType: React.Dispatch<React.SetStateAction<ModalType | undefined>>
}

const initialContextValue = {} as ModalActionContextType

export const ModalActionContext = createContext(initialContextValue)

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [type, setType] = useState<ModalType | undefined>()
  useEffect(() => {
    setType('button')
  }, [])

  const value: ModalActionContextType = useMemo(
    () => ({
      setType,
    }),
    [],
  )

  const ModalDetailProvider = useMemo(() => {
    if (type === 'text') {
      return (
        <ModalActionContext.Provider value={value}>
          <ModalTextProvider>{children}</ModalTextProvider>
        </ModalActionContext.Provider>
      )
    }
    if (type === 'button') {
      return (
        <ModalActionContext.Provider value={value}>
          <ModalButtonProvider>{children}</ModalButtonProvider>
        </ModalActionContext.Provider>
      )
    }
    if (type === 'normal') {
      return (
        <ModalActionContext.Provider value={value}>
          <ModalNormalProvider>{children}</ModalNormalProvider>
        </ModalActionContext.Provider>
      )
    }

    return <>{children}</>
  }, [type, children])

  return ModalDetailProvider
}
