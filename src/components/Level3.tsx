import { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'

const Level3 = () => {
  const { value, setValue } = useContext(LanguageContext)

  const handleChangeLanguage = () => {
    setValue(value === 'English' ? 'Українська' : 'English')
  }

  return (
    <div>
      <h3>
        3. {value === 'English' ? 'Current language is most definitely' : 'Поточна мова безсумнівно'}: <u>{value}</u>
      </h3>
      <button onClick={handleChangeLanguage}>
        {value === 'English' ? 'Change to Ukrainian' : 'Змінити на англійську'}
      </button>
    </div>
  )
}

export default Level3
