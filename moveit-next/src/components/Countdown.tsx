import { useState,useEffect, useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout:NodeJS.Timeout;

export function Countdown(){
    const{startNewChallenge}=useContext(ChallengesContext)
    const[time, settime]= useState(0.1 *60)
    const[isActive,setIsActive] = useState(false) // verifica se esta ativo ou não //inicia em falto e só começa quando clicar no botão
    const[hasFinished,setHasFinished] =useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    // o split reparte o numero em 2 por ex se tiver 25 ele reparte '2' e '5'
    //se tiver no minuto 5 não tem o que repartir por isso usa padStart, ele verifica se a string não tiver 2 caracter ele vai preencher para a esquerda com 0
    const [minuteLeft,minuteRight] =String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRight] =String(seconds).padStart(2,'0').split('');

    function startCountdown(){
        setIsActive(true)
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setIsActive(false);
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
        <>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
            </div>
            {hasFinished ? (

                        <button 
                        disabled
                        className={styles.countdownButton} 
                        >
                        Ciclo encerrado
                        </button>

            ) :(

                    <>
                     {isActive ?(
                    <button 
                    type='button'
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}
                    >
                      Abandonar ciclo
                 </button>
                    ): (      <button 
                type='button'
                className={styles.countdownButton}
                onClick={startCountdown}
                >
                 Iniciar um ciclo
             </button>
             )
               }
           
                    </>
            )}
           
  
        </>
        
   
 
   
    )
}