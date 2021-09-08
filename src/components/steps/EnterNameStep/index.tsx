import React from 'react';
import clsx from 'clsx';

import { StepsContext } from '../../../../pages';

import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../StepInfo';

import styles from './EnterNameStep.module.scss';

export const EnterNameStep: React.FC = () => {
  const { userData, setFieldValue, onNextStep } = React.useContext(StepsContext);

  const [fullname, setFullname] = React.useState<string>(userData.fullname || '');
  const nextDisabled = !fullname;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFullname(() => event.target.value);
  };

  const onClickNextStep = () => {
    if (!nextDisabled) {
      setFieldValue('fullname', fullname);
      onNextStep();
    }
  };

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <WhiteBlock className={clsx('m-auto', styles.whiteBlock)}>
        <div className="mb-30">
          <input value={fullname} onChange={handleChange} className="field" placeholder="Enter fullname" />
        </div>
        <Button disabled={nextDisabled} onClick={onClickNextStep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
