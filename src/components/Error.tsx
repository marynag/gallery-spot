import React from 'react';

type ErrorProps = {
  text?: string;
};

export const Error = ({ text = 'Ops... Something went wrong' }: ErrorProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-10">
        <strong className="font-bold">Error!</strong>{' '}
        <span className="block sm:inline">{text}</span>
      </div>
    </div>
  );
};
