import { createContext } from 'react'

interface UserContextProps{
  handleSaveData: (name: string) => void
}

const UserContext = createContext({} as UserContextProps)

function AppProvider ({ children }: any) {
  const handleSaveData = (value: string) => {
    localStorage.setItem('@item', value)
  }

  return (
     <UserContext.Provider value={{ handleSaveData }}>
       {children}
     </UserContext.Provider>
  )
}

export {
  UserContext,
  AppProvider
}
