import React from 'react';
import clsx from 'clsx';

import Link from 'next/link';

import { Button } from '../Button';

import styles from './Room.module.scss';

interface RoomProps {
  title: string;
  users: any[];
}

const Room: React.FC<RoomProps> = ({ title, users }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="d-flex align-items-center justify-content-between">
          <h2>{title}</h2>
          <div className={clsx('d-flex align-items-center', styles.actionButtons)}>
            <Link href="/">
              <a>
                <Button color="gray" className={styles.leaveButton}>
                  <img width={18} height={18} src="/static/peace.png" alt="Hand black" />
                  Leave quietly
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="users">
        {/* {users?.map((user) => (
             <User {...user} />
          ))} */}
      </div>
    </>
  );
};

export { Room };
