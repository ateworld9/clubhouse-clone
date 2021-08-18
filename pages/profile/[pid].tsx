import React from 'react';
import { useRouter } from 'next/router';

import { Header } from '../../src/components/Header';
import { Profile } from '../../src/components/Profile';

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Header />
      <div className="container mt-30">
        <Profile
          fullname="Vahrameev Dmitriy"
          username="ateworld9"
          about="Test info"
          avatarUrl="https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1"
        />
      </div>
    </>
  );
};

export default ProfilePage;
