import { Dispatch, FC, ReactNode, createContext, useState } from 'react'

type LoginContextType = {
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<boolean>
}

export const LoginContext = createContext<LoginContextType>({} as LoginContextType)

export const LoginContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  return <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</LoginContext.Provider>
}
