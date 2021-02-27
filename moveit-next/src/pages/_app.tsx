import '../styles/global.css'
import{ChallengesContext, ChallengesProvider} from '../context/ChallengesContext'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
  <ChallengesProvider>//o provider vai fazer o seguinte: todos os elementos dentro dele vao ter acesso aos dados do contexto
  <Component {...pageProps} />
  </ChallengesProvider>
  )
}

export default MyApp
