'use client';

import {useEffect} from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[NEXT ERROR]', error);
  }, [error]);

  return (
    <div className="p-8">
      <h2 className="text-red-600 text-lg font-bold">Something went wrong</h2>
      <pre className="mt-4 bg-gray-100 p-4 text-sm text-red-800">
        {error?.stack || error?.message}
      </pre>
      <button
        onClick={() => reset()}
        className="mt-6 rounded bg-black px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}
