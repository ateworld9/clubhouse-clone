import { useState } from 'react';
import { ChooseAvatarStep } from '../src/components/steps/ChooseAvatarStep';
import { EnterNameStep } from '../src/components/steps/EnterNameStep';
import { TwitterStep } from '../src/components/steps/TwitterStep';
import { WelcomeStep } from '../src/components/steps/WelcomeStep';

const stepsComponents = [
  WelcomeStep,
  EnterNameStep,
  TwitterStep,
  ChooseAvatarStep,
];

export default function Home() {
  const [step, setStep] = useState<number>(3);

  const Step = stepsComponents[step];

  return (
    <div>
      <Step />
    </div>
  );
}
