import React from 'react';
import { WelcomeStep } from '../src/components/steps/WelcomeStep';
import { EnterNameStep } from '../src/components/steps/EnterNameStep';
import { TwitterStep } from '../src/components/steps/TwitterStep';
import { ChooseAvatarStep } from '../src/components/steps/ChooseAvatarStep';
import { EnterPhoneStep } from '../src/components/steps/EnterPhoneStep';
import { EnterCodeStep } from '../src/components/steps/EnterCodeStep';

const stepsComponents = [WelcomeStep, TwitterStep, EnterNameStep, ChooseAvatarStep, EnterPhoneStep, EnterCodeStep];

interface StepsContextProps {
  onNextStep: () => void;
  step: number;
}

export const StepsContext = React.createContext<StepsContextProps>({} as StepsContextProps);

export default function Home() {
  const [step, setStep] = React.useState<number>(0);
  const Step = stepsComponents[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <StepsContext.Provider value={{ step, onNextStep }}>
      <Step />
    </StepsContext.Provider>
  );
}
