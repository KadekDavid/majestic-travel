import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1f2937", color: "#e5e7eb", padding: "48px 24px 24px", marginTop: "60px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Baris atas: Logo (kiri) + Grid menu (kanan) */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginBottom: "48px" }}>
          {/* Bagian kiri: Logo + Nama perusahaan */}
          <div style={{ flex: "1", minWidth: "200px" }}>
            <Image
              src="/assets/images/logo.png"
              alt="Logo Majestic Of Java"
              width={80}
              height={60}
              style={{ objectFit: "contain", marginBottom: "16px" }}
            />
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px", color: "white" }}>
              MAJESTIC OF JAVA<br />TOUR & TRAVEL
            </h3>
            <address style={{ fontStyle: "normal", lineHeight: "1.6", color: "#d1d5db", fontSize: "14px" }}>
              JL. Perum Jl. Taman Sutri Indah No.38 No.Blok E, Sobo,<br />
              Kec. Banyuwangi, Kabupaten Banyuwangi,<br />
              Jawa Timur 68418
            </address>
          </div>

          {/* Bagian kanan: Grid 4 kolom menu */}
          <div style={{ flex: "2", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "24px" }}>
            <div>
              <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px", color: "white" }}>Perusahaan</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "8px" }}><Link href="/tentang-kami" style={{ color: "#e5e7eb", textDecoration: "none" }}>Tentang Kami</Link></li>
                <li style={{ marginBottom: "8px" }}><Link href="/artikel" style={{ color: "#e5e7eb", textDecoration: "none" }}>Artikel Wisata</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px", color: "white" }}>Paket Tour</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "8px" }}><Link href="/paket/open-trip" style={{ color: "#e5e7eb", textDecoration: "none" }}>Open Trip</Link></li>
                <li style={{ marginBottom: "8px" }}><Link href="/paket/private-trip" style={{ color: "#e5e7eb", textDecoration: "none" }}>Private Trip</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px", color: "white" }}>Sewa Kendaraan</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "8px" }}><Link href="/sewa/mobil" style={{ color: "#e5e7eb", textDecoration: "none" }}>Mobil</Link></li>
                <li style={{ marginBottom: "8px" }}><Link href="/sewa/motor" style={{ color: "#e5e7eb", textDecoration: "none" }}>Sepeda Motor</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px", color: "white" }}>Penginapan</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "8px" }}><Link href="/hotel" style={{ color: "#e5e7eb", textDecoration: "none" }}>Hotel</Link></li>
                <li style={{ marginBottom: "8px" }}><Link href="/villa" style={{ color: "#e5e7eb", textDecoration: "none" }}>Villa</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Baris sosial media (horizontal) */}
        <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginBottom: "32px", flexWrap: "wrap" }}>
          <a href="#" style={{ color: "#e5e7eb", textDecoration: "none" }}>Tiktok</a>
          <a href="https://wa.me/628133082379" style={{ color: "#e5e7eb", textDecoration: "none" }}>WhatsApp</a>
          <a href="#" style={{ color: "#e5e7eb", textDecoration: "none" }}>Instagram</a>
        </div>

        {/* Copyright */}
        <div style={{ textAlign: "center", borderTop: "1px solid #374151", paddingTop: "24px", fontSize: "14px", color: "#9ca3af" }}>
          2026 | Majestic Of Java Tour & Travel<br />
          Designed and Developed by David
        </div>
      </div>
    </footer>
  );
}