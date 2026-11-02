"use client";

import { useEffect, useRef, useState } from "react";
import Arrow from "./arrow";

const links = [
  ["About", "about"],
  ["Ministry", "ministry"],
  ["Consulting", "consulting"],
  ["Counselling", "marriage"],
  ["Music", "music"],
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false);
    };
    document.addEventListener("keydown", close);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", close);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Primary navigation">
        <a
          className="brand"
          href="#hero"
          onClick={() => setOpen(false)}
          aria-label="Adekemi Akinsipe home"
        >
          <span className="brand-mark">
            KA<span>.</span>
          </span>
          <span>
            Adekemi Akinsipe<small>MINISTRY · MUSIC · PURPOSE</small>
          </span>
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <div className={`nav-links${open ? " is-open" : ""}`} id="nav-links">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Contact me <Arrow direction="right" />
          </a>
        </div>
      </nav>
    </header>
  );
}
