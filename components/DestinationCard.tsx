import Image from "next/image";

interface DestinationCardProps {
  name: string;
  location?: string;   // default "INDONESIA"
  tours: number;
  imagePath: string;
}

export default function DestinationCard({
  name,
  location = "INDONESIA",
  tours,
  imagePath,
}: DestinationCardProps) {
  return (
    <div className="card">
      <Image
        src={imagePath}
        alt={name}
        width={400}
        height={460}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <div className="overlay">
        <span>{location}</span>
        <h3>{name}</h3>
        <p>{tours} Paket Tour</p>
      </div>
    </div>
  );
}