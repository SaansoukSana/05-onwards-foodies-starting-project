import Link from "next/link"

export default function MealsPage() {
    return (
        <main>
            <h1>Meals for yourself</h1>
            <p><Link href="/meals/pizza">Pizza</Link></p>
            <p><Link href="/meals/sushi">Sushi</Link></p>
        </main>
    )
}