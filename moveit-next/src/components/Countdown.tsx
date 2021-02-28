import { useState,useEffect, useContext } from 'react'
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/Countdown.module.css'


export function Countdown(){
  const{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }=useContext(CountdownContext)
    // o split reparte o numero em 2 por ex se tiver 25 ele reparte '2' e '5'
    //se tiver no minuto 5 não tem o que repartir por isso usa padStart, ele verifica se a string não tiver 2 caracter ele vai preencher para a esquerda com 0
    const [minuteLeft,minuteRight] =String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRight] =String(seconds).padStart(2,'0').split('');

  
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