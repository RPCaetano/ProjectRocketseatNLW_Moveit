import Head from 'next/head'
import {GetServerSideProps} from 'next'
import { ExperienceBar } from "../components/ExperienceBar";
import styles from '../styles/pages/Home.module.css'
import { Profile } from '../components/Profile';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../context/CountdownContext';
import React from 'react';
import { ChallengesProvider } from '../context/ChallengesContext';

interface HomeProps{
  level:number,
  currentExperience:number ,
  challengesCompleted:number,

}
export default function Home(props:HomeProps) {
  return (
    <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it </title>
      </Head>
     <ExperienceBar />
    
    
     <CountdownProvider>
        <section>
       <div>
        <Profile/>
        <CompleteChallenges/>
        <Countdown/>
       </div>
      <div>
      <ChallengeBox/>
      </div>
     </section>
     </CountdownProvider>
     </div>
     </ChallengesProvider>
  )
  }
//Quando declarado o getServerSideProps dentro da pag do next é possivel manipular quais dados sao passados do servidor para o client
//toda chamada api que for colocada dentro do componente é chamada apenas pelo browser
//antes de contruir a interface ele faz chamada api repassa os dados p componente ja pronto e depois é contruida a tela

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
//chamada api
//tudo o que é feito nesta função é executada no NODE e não no browser do usuario 
//não aparece o console.log no inspecionar e sim no node
//executa o backend e quando estiver ok ele carrega para o browser que é a chamada acima

const {level, currentExperience ,challengesCompleted} = ctx.req.cookies;

  return{
props:{
  level:Number(level), //convertendo em numero
  currentExperience:Number(currentExperience) ,
  challengesCompleted:Number(challengesCompleted),
    }
  }
}
