import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Discover The Best<br />
          Lovely Places!
        </h1>
        <p>
          Jelajahi destinasi terbaik bersama<br />
          Majestic Of Java Tour & Travel
        </p>
      </div>
      <div className="hero-image">
        <Image
          src="/assets/images/hero-1.png"
          alt="Kawah Ijen"
          width={480}
          height={480}
          priority
        />
      </div>
    </section>
  );
}