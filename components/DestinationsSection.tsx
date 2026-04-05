// components/DestinationsSection.tsx
import destinations from "@/data/destinations.json";
import DestinationCard from "./DestinationCard";

export default function DestinationsSection() {
  return (
    <section className="destinations">
      <h2>Mau Traveling Kemana?</h2>
      <div className="grid">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            name={dest.name}
            slug={dest.slug}
            tours={dest.tours}
            imagePath={dest.image}
          />
        ))}
      </div>
    </section>
  );
}