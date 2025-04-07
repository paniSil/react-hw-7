import { createContext, ReactNode, useState } from 'react'

interface LanguageContextType {
  value: string
  setValue: (newValue: string) => void
}

const LanguageContext = createContext<LanguageContextType>({
  value: 'English',
  setValue: () => {}
})

interface LanguageProviderProps {
  children: ReactNode
}
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [value, setValue] = useState<string>('English')

  return <LanguageContext.Provider value={{ value, setValue }}>{children}</LanguageContext.Provider>
}

export default LanguageContext
