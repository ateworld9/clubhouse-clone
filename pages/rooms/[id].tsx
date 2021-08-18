import React from 'react';

import Axios from '../../src/core/axios';

import { Header } from '../../src/components/Header';
import { BackButton } from '../../src/components/BackButton';
import { Room } from '../../src/components/Room';

interface RoomPageProps {
  title: string;
  users: any[];
}

export default function RoomPage({ title, users = [] }) {
  return (
    <>
      <Header />
      <div className="container mt-40">
        <BackButton />
        <Room title={title} users={users} />
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const { data } = await Axios.get('rooms.json');
    const room = data.find((room) => room.id === ctx.params.id);
    return {
      props: room,
    };
  } catch (error) {
    console.log(error);
  }
};
