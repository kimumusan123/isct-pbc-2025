type PetCardProps = {
  name: string
  species: string
  age: number
  color: string
  breed: string
}

export default function PetCard({ name, species, age, color, breed }: PetCardProps) {
  // Determine emoji based on species
  let emoji = "🐾"
  if (species === "Dog") emoji = "🐕"
  else if (species === "Cat") emoji = "🐱"
  else if (species === "Bird") emoji = "🐦"
  else if (species === "Fish") emoji = "🐠"

  return (
    <div className="bg-green rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <span className="text-4xl mr-3">{emoji}</span>
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      </div>

      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">Species:</span> {species}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Age:</span> {age} years old
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Color:</span> {color}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Breed:</span> {breed}
        </p>
      </div>
    </div>
  )
}