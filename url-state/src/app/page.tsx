import { Example } from '@/_components/example';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-lg font-bold text-center">URL state Demo</h1>
      <div>
        <Suspense fallback={<>Loading...</>}>
          <Example />
        </Suspense>
      </div>
      <div className="my-6">
        <p className="italic">* Remember to use zod to validate the URL*</p>
        <p className="p-2">
          The code is up on my GitHub @
          https://github.com/prakash118/blog-code/tree/main/url-state
        </p>
      </div>
    </div>
  );
}
