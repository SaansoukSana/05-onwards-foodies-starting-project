import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/meals">Go to Meals</Link></p>
      <p><Link href="/meals/share">Meals to share</Link></p>
      <p><Link href="/community">Show some love to the Community</Link></p>
    </main>
  );
}
