// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* LOGO */}
        <a href="#" className="logo">
          <Image
            src="/assets/images/logo.png"
            alt="Pesona Ijen"
            width={60}
            height={40}
            priority
          />
        </a>

        {/* MENU (CENTER) */}
        <nav className="nav-menu">
          <a href="#" className="active">Beranda</a>
          <a href="#">Destinasi Wisata</a>
          <a href="#">Pilihan Paket Tour</a>
          <a href="#">Sewa Kendaraan</a>
          <a href="#">Artikel Wisata</a>
          <a href="#">Tentang Kami</a>
        </nav>
      </div>
    </header>
  );
}