import { Suspense } from 'react';
import { UserDataTable } from './_components/users-table';

async function getUsers() {
  const response = await fetch('http://localhost:3000/api/users');
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
        User data with Tanstack table & Zustand store with connected with URL
      </h1>
      <p className="text-center">
        Sort or/and filter the table to observe updates in both the data
        displayed and the URL.
      </p>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <UserTable />
        </Suspense>
      </div>
    </div>
  );
}
