import Head from 'next/head'
import { ExperienceBar } from "../components/ExperienceBar";
import styles from '../styles/pages/Home.module.css'
import { Profile } from '../components/Profile';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';


export default function Home() {
  return (
    <div className={styles.container}>
     <ExperienceBar />
     <section>
       <div>
        <Profile/>
        <CompleteChallenges/>
        <Countdown/>
       </div>
      <div>

      </div>
     </section>
     </div>
  )
}
