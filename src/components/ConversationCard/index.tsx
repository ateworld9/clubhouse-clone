import React from 'react';
import clsx from 'clsx';

import { Avatar } from '../Avatar';
import { WhiteBlock } from '../WhiteBlock';

import styles from './ConversationCard.module.scss';

interface ConversationCardProps {
  title: string;
  guests?: string[];
  avatars?: string[];
  guestsCount: number;
  speakersCount: number;
}

const ConversationCard: React.FC<ConversationCardProps> = ({
  title,
  guests = [],
  avatars = [],
  guestsCount,
  speakersCount,
}) => {
  return (
    <WhiteBlock className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <div className={clsx('d-flex mt-10', styles.content)}>
        {/* need to do component Avatar list for code optimization */}
        <div className={styles.avatars}>
          {avatars.map((url, i) => (
            <Avatar
              key={url}
              width="45px"
              height="45px"
              src={url}
              className={avatars.length > 1 && i === avatars.length - 1 ? 'lastAvatar' : ''}
            />
          ))}
        </div>
        <div className={clsx(styles.info, 'ml-10')}>
          <ul className={styles.users}>
            {guests.map((name, i) => (
              <li key={name + i}>
                {name} <img src="/static/cloud.png" alt="Cloud" width={14} height={14} />
              </li>
            ))}
          </ul>
          <ul className={styles.details}>
            <li>
              {guestsCount}
              <img src="/static/user.svg" alt="Users count" width={12} height={12} />
            </li>
            <li>
              {speakersCount}
              <img className="ml-5" src="/static/message.svg" alt="Users count" width={12} height={12} />
            </li>
          </ul>
        </div>
      </div>
    </WhiteBlock>
  );
};

export { ConversationCard };
