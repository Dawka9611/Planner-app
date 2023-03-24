import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../utilities/style/App.scss'
import Routers from './Routers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="scssClass">
      <div className='dark-colors'>
        <Routers />
      </div>
    </div>
  )
}

export default App
