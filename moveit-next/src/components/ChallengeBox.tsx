import styles from '../styles/components/ChallengeBox.module.css'


export function ChallengeBox(){
    const hasActiveChallenge =true;
    return(
      
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
            <div className={styles.challengeActive}>
                <header>Ganhe 400xp</header>

                <main>
                    <img src="icons/body.svg" alt="body"/>
                    <strong>Novo desafio</strong>
                    <p>Feche os olhos, desligue música  </p>
                    <p>Respire e inspire lentamente 10x</p>
                </main>
                <footer>
                    <button
                    type='button'
                    className={styles.challengeFailedButton}
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