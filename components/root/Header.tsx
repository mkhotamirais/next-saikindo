"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { motion } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <div className="logo">Logo</div>
        <button type="button" aria-label="Menu" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
      </header>
      <motion.div>
        <nav>nav mobile</nav>
      </motion.div>
    </>
  );
}
