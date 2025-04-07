import { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'
import Level3 from './Level3'

const Level2 = () => {
  const { value } = useContext(LanguageContext)

  return (
    <div>
      <h2>
        2. {value === 'English' ? 'Current language is definitely' : 'Поточна мова точно'}: <u>{value}</u>
      </h2>
      <Level3 />
    </div>
  )
}

export default Level2
