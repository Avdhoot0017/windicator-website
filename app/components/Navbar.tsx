"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FF8B3D" }}>
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="font-bold text-lg text-gray-900">Krupa Udyog</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">About</Link>
          <Link href="/privacy" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Privacy Policy</Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-700"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4 bg-white">
          <Link href="/" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>About</Link>
          <Link href="/privacy" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>Privacy Policy</Link>
        </div>
      )}
    </nav>
  );
}
