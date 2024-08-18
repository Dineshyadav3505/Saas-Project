'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface QueryParams {
  h1: string;
  h2: string;
  api: string;
}

const SamplePage: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState<QueryParams | null>(null);

  useEffect(() => {
    if (router.isReady) {
      const { h1, h2, api } = router.query;
      setQuery({
        h1: h1 as string,
        h2: h2 as string,
        api: api as string,
      });
    }
  }, [router.isReady]);

  if (!query) {
    return <div>Loading...</div>; // Show a loading state while the query parameters are being retrieved
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{query.h1}</h1>
      <h2 className="text-xl">{query.h2}</h2>
      <p className="text-lg">API: {query.api}</p>
    </div>
  );
};

export default SamplePage;