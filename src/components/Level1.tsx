import { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'
import Level2 from './Level2'

const Level1 = () => {
  const { value } = useContext(LanguageContext)

  return (
    <div>
      <h1>
        1. {value === 'English' ? 'Current language is' : 'Поточна мова'}: <u>{value}</u>
      </h1>
      <Level2 />
    </div>
  )
}

export default Level1
