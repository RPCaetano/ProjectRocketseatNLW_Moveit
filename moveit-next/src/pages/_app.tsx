import '../styles/global.css'
import{ ChallengesProvider} from '../context/ChallengesContext'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    //o provider vai fazer o seguinte: todos os elementos dentro dele vao ter acesso aos dados do contexto
  <ChallengesProvider>
   
  <Component {...pageProps} />

  </ChallengesProvider>
  )
}

export default MyApp
