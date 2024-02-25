import db from '@/db'
export default async function Home() {
  const profiles = await db.query.profile.findMany()
  console.log(profiles)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
