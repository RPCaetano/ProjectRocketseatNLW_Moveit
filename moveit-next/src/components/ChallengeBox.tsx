import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'


export function ChallengeBox(){
const {activeChallenge, resetChallenge}= useContext(ChallengesContext)


    //const hasActiveChallenge =true;
    return(
      
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
            <div className={styles.challengeActive}>
                <header>Ganhe {activeChallenge.amount}</header>

                <main>
                    <img src={`icons/${activeChallenge.type}.svg`}/>
                    <strong>Novo desafio</strong>
                    <p>{activeChallenge.description}</p>
                 
                </main>
                <footer>
                    <button
                    type='button'
                    className={styles.challengeFailedButton}
                    onClick={resetChallenge}
                    >Falhei
                    </button>
                    <button
                    type='button'
                    className={styles.challengeCompletedButton}
                    >Completei
                    </button>
                </footer>
                               
                </div>

            ):(
            <div className={styles.challengeBoxNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="level up"/>
                </p>
                <p>
                    Avance de level completando desafios
                </p>

            </div>
            )}
            </div>
       
    )
}