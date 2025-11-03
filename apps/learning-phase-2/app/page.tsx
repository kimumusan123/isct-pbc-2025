'use client';

export default function Home() {
  // Pet information
  const petName = "Buddy"
  const petSpecies = "Dog"
  const petAge = 3
  const petColor = "Brown"

  console.log("Pet name:", petName)
  console.log("Pet species:", petSpecies)
  console.log("Pet age:", petAge)
  console.log("Pet color:", petColor)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          🐾 Hello World!!! 🐾
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Track and manage your pets in one place
        </p>
      </div>
    </main>
  )
}
