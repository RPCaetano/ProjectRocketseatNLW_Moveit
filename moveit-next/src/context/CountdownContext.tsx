import {Children, createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { Countdown } from '../components/Countdown'
import { ChallengesContext } from './ChallengesContext'

interface CountdownContextData{
    minutes:number;
    seconds:number;
    hasFinished:boolean;
    isActive:boolean;
    startCountdown:()=>void;
    resetCountdown:()=>void;
}

interface CountdownProviderProps{
    children: ReactNode;
}
export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout:NodeJS.Timeout;


export function CountdownProvider({children}:CountdownProviderProps){
    const{startNewChallenge}=useContext(ChallengesContext)
    const[time, settime]= useState(0.1 *60)
    const[isActive,setIsActive] = useState(false) // verifica se esta ativo ou não //inicia em falto e só começa quando clicar no botão
    const[hasFinished,setHasFinished] =useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    function startCountdown(){
        setIsActive(true)
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setIsActive(false);
        setHasFinished(false);
        settime(0.1*60);
    }
// o use effect recebe 2 parametros -->o que -->quando
//o que eu quero executar sempre será uma função
    useEffect(()=>{ //função do que eu quero executar
        if (isActive && time >0)//se eu estiver com countdown ativo e o timer for > 0
   {
      countdownTimeout= setTimeout(() =>{ //quero executar uma função depois de um tempo
           settime(time -1) //vou reduzir o time em 1seg
       },1000)//quando eu quero que execute = após 1seg
   }else if (isActive && time==0){
        setHasFinished(true);
        setIsActive(false);
        startNewChallenge();
   }
    },[isActive,time])//toda vez que o valor de active(active é o botão) mudar ele executa função acima reduzindo d 1 em 1 segundo quando botão é clicado
    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,


        }}>
            {children}
        </CountdownContext.Provider>
    )
}