import DestinationCard from "./DestinationCard";

const destinationsData = [
  {
    id: 1,
    name: "Ijen",
    tours: 1,
    imagePath: "/assets/images/ijen.jpg",
  },
  {
    id: 2,
    name: "Bali",
    tours: 3,
    imagePath: "/assets/images/bali.jpg",
  },
  {
    id: 3,
    name: "Baluran, Pantai Bama",
    tours: 4,
    imagePath: "/assets/images/baluran.jpg",
  },
  {
    id: 4,
    name: "Djawatan",
    tours: 3,
    imagePath: "/assets/images/djawatan.jpg",
  },
];

export default function DestinationsSection() {
  return (
    <section className="destinations">
      <h2>Mau Traveling Kemana?</h2>
      <div className="grid">
        {destinationsData.map((dest) => (
          <DestinationCard
            key={dest.id}
            name={dest.name}
            tours={dest.tours}
            imagePath={dest.imagePath}
          />
        ))}
      </div>
    </section>
  );
}