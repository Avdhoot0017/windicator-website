import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-6 text-center" style={{ background: "linear-gradient(135deg, #fff7f0 0%, #fff 60%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 inline-block"></span>
            <span className="text-orange-600 text-sm font-medium">Meter Reading Platform</span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Smart Meter Reading<br />
            <span style={{ color: "#FF8B3D" }}>for Your Business</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed">
            Krupa Udyog helps companies track utility meter readings across multiple sites —
            recording daily usage, managing recorders, and viewing analytics in real time.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#FF8B3D" }}
            >
              Learn More
            </Link>
            <Link
              href="/privacy"
              className="px-8 py-3.5 rounded-xl font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Everything you need</h2>
          <p className="text-center text-gray-500 mb-14">Built for companies managing utility consumption at scale.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "Daily Readings",
                desc: "Recorders log meter values every day. The app tracks daily usage and flags missing entries automatically.",
              },
              {
                icon: "🏢",
                title: "Multi-Company",
                desc: "Manage readings across multiple companies from a single dashboard. Each company gets its own history.",
              },
              {
                icon: "👥",
                title: "Role-Based Access",
                desc: "Super Admin, Company Admin, and Recorder roles — each sees exactly what they need, nothing more.",
              },
              {
                icon: "📈",
                title: "Usage Analytics",
                desc: "Monthly usage summaries, opening vs closing meter values, and trend charts per company.",
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                desc: "JWT-based authentication, encrypted passwords, and role-scoped data access keep your data safe.",
              },
              {
                icon: "☁️",
                title: "Cloud Hosted",
                desc: "Backend runs on Google Cloud Run with automatic scaling. Always available when your team needs it.",
              },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:border-orange-100 hover:shadow-sm transition-all">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: "#FF8B3D" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-orange-100 mb-8 text-lg">Download the Krupa Udyog app and start tracking meter readings today.</p>
          <div className="inline-block bg-white rounded-xl px-8 py-3.5 font-semibold" style={{ color: "#FF8B3D" }}>
            Available on Android
          </div>
        </div>
      </section>
    </div>
  );
}
