import { LanguageProvider } from './context/LanguageContext'
import Level1 from './components/Level1'

const App = () => {
  return (
    <LanguageProvider>
      <Level1 />
    </LanguageProvider>
  )
}

export default App
