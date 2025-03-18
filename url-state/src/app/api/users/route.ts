import users from './users-data.json';

export async function GET() {
  return new Response(JSON.stringify(users, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
