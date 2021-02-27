import{createContext, useState,ReactNode} from 'react';



interface ChallengeContextData{
    level:number;
    currentExperience:number;
    challengesCompleted:number;
    levelUp:()=>void;
    startNewChallenge:()=>void;
}


interface ChallengesProviderProps{
    children:ReactNode // o reactNode aceita qualquer elemento children como filho(componente,texto,tag)
}

export const ChallengesContext = createContext({}as ChallengeContextData) ;

export function ChallengesProvider({children}:ChallengesProviderProps){
    const[level,setLevel]= useState(1);
    const[currentExperience, setCurrentExperience]= useState(0);
    const[challengesCompleted, setChallengesCompleted]=useState(0);

    function levelUp(){
        setLevel(level +1)
    }
    function startNewChallenge(){

    }
    return(
        <ChallengesContext.Provider 
        value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge,
            }}
            >
            {children}
        </ChallengesContext.Provider>
    )
}