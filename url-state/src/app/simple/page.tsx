import { Suspense } from 'react';
import { UserDataTable } from './_components/users-table';

export const dynamic = 'force-dynamic';

async function getUsers() {
  const response = await fetch(`${process.env.API}/api/users`);
  return await response.json();
}

async function UserTable() {
  const users = await getUsers();
  return <UserDataTable data={users} />;
}

export default async function Page() {
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl mb-4 text-center">
        User data with Tanstack table & custom hook to connect with state in URL
      </h1>
      <p className="text-center">
        To share a specific filtered or/and sorted view of the table, first
        apply the desired changes. Then, copy and paste the updated URL into a
        new tab. This will display the exact same screen to anyone you share the
        link with.
      </p>
      <p className="text-center py-3">
        Code for this page is available at my GitHub:
        https://github.com/prakash118/blog-code/tree/main/url-state/src/app/simple
      </p>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <UserTable />
        </Suspense>
      </div>
    </div>
  );
}
