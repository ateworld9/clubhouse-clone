import React from 'react';
import { WelcomeStep } from '../src/components/steps/WelcomeStep';
import { EnterNameStep } from '../src/components/steps/EnterNameStep';
import { GithubStep } from '../src/components/steps/GithubStep';
import { ChooseAvatarStep } from '../src/components/steps/ChooseAvatarStep';
import { EnterPhoneStep } from '../src/components/steps/EnterPhoneStep';
import { EnterCodeStep } from '../src/components/steps/EnterCodeStep';

const stepsComponents = [WelcomeStep, GithubStep, EnterNameStep, ChooseAvatarStep, EnterPhoneStep, EnterCodeStep];

interface StepsContextProps {
  step: number;
  onNextStep: () => void;
  userData?: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  setFieldValue: (field: keyof UserData, value: string | number) => void;
}

export type UserData = {
  id: number;
  fullname: string;
  avatarUrl: string;
  isActive: number;
  username: string;
  phone: string;
};

export const StepsContext = React.createContext<StepsContextProps>({} as StepsContextProps);

export default function Home() {
  const [step, setStep] = React.useState<number>(0);
  const [userData, setUserData] = React.useState<UserData>();
  const Step = stepsComponents[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };
  const setFieldValue = (field: string, value: string | number) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <StepsContext.Provider value={{ step, onNextStep, userData, setUserData, setFieldValue }}>
      <Step />
    </StepsContext.Provider>
  );
}
