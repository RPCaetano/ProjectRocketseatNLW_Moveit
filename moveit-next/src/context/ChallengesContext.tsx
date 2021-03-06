import { createContext, useState, ReactNode, useEffect } from "react";
import challenges from "../../challenges.json";
import Cookies from 'js-cookie'
import { LevelUpModal } from "../components/LevelUpModal";


interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal:()=>void;
}

interface ChallengesProviderProps {
  children: ReactNode; // o reactNode aceita qualquer elemento children como filho(componente,texto,tag)
    level:number,
    currentExperience:number ,
    challengesCompleted:number,
  
  }


export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ 
  children,
 ...rest //todo o resto
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0); //barra de experiencia do usuario
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const[isLevelUpModalOpen,setIsLevelUpModalOpen]=useState(false)
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2); // o 4 é o fator de experiencia pode subir ou diminuir deixando mais dificil ou nao

  useEffect(()=>{

Notification.requestPermission();

  },[])
  
  useEffect(()=>{
Cookies.set('level',String(level))
Cookies.set('currentExperience',String(challengesCompleted))
Cookies.set('challengeCompleted',String(challengesCompleted))

  },[level,currentExperience,challengesCompleted])
    
function closeLevelUpModal(){
  setIsLevelUpModalOpen(false)
}


  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true)
  }
  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();
    
    if(Notification.permission ==='granted'){
        new Notification('Novo desafio ',{
            body:`Valendo ${challenge.amount}xp|`
        })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }
  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }
    const { amount } = activeChallenge;
    
    let finalExperience = currentExperience + amount;

    if(finalExperience > experienceToNextLevel){
        finalExperience= finalExperience - experienceToNextLevel;
        levelUp()
    }
    setCurrentExperience(finalExperience);
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted +1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        completeChallenge,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        closeLevelUpModal
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal/>}
    </ChallengesContext.Provider>
  );

}
