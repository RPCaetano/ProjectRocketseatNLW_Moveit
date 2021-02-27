import Head from 'next/head'
import { ExperienceBar } from "../components/ExperienceBar";
import styles from '../styles/pages/Home.module.css'
import { Profile } from '../components/Profile';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it </title>
      </Head>
     <ExperienceBar />
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
     </div>
  )
}
