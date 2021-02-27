import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src='https://github.com/RPCaetano.png' alt='RenataCaetano'/>
        <div>
        <strong>Renata Caetano</strong>
        <p>Level 1</p>
        </div>
        
        </div>
       
    )
}