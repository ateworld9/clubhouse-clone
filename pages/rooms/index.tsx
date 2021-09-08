import React from 'react';
import {Axios} from '../../src/core/axios';

import Link from 'next/link';

import { Header } from '../../src/components/Header';
import { ConversationCard } from '../../src/components/ConversationCard';
import { Button } from '../../src/components/Button';

export default function RoomsPage({ rooms = [] }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-40 d-flex align-items-center justify-content-between">
          <h1>All conversations</h1>
          <Button color="green">+ Start room</Button>
        </div>
        <div className="grid mt-30">
          {rooms.map((room) => (
            <Link key={room.id} href={`/rooms/${room.id}`}>
              <a>
                <ConversationCard
                  title={room.title}
                  guests={room.guests}
                  avatars={room.avatars}
                  guestsCount={room.guestsCount}
                  speakersCount={room.speakersCount}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await Axios.get('rooms.json');
    return {
      props: {
        rooms: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
