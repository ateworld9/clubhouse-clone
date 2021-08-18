import React from 'react';
import { useRouter } from 'next/router';

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.back()} className="d-flex mb-30 cup">
      <img className="mr-5" src="/static/back-arrow.svg" alt="Back" />
      <h4>Back</h4>
    </div>
  );
};

export { BackButton };
