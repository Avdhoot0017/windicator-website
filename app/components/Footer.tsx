import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FF8B3D" }}>
                <span className="text-white font-bold text-xs">K</span>
              </div>
              <span className="text-white font-bold">Krupa Udyog</span>
            </div>
            <p className="text-sm">Meter Reading & Usage Tracking Platform</p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-orange-400 transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Krupa Udyog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
