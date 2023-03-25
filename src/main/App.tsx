import { useState } from 'react'
import Routers from './Routers'
// import Routers from './Routers'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, sizes } from '../utilities/style/Variables'
import { UserContextProvider } from '../utilities/context/UserContext'

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <UserContextProvider>
        <AppStyle>
          <div className='dark-colors'>
            <Routers />
          </div>
        </AppStyle>
      </UserContextProvider>
    </ThemeProvider>
  )
}

export default App

const AppStyle = styled.div`
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: ${sizes.fontSizeMedium};
  box-sizing: border-box;
`
