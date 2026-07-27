export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-orange-50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Krupa Udyog</h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            We build simple, reliable tools for businesses to manage their utility consumption —
            helping teams record, track, and analyse meter readings without the complexity.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Krupa Udyog is a utility management company focused on making meter reading
              simple, accurate, and accessible. Our platform is designed for companies with
              multiple sites that need to track daily electricity or water consumption.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We believe that tracking utility usage shouldn't require complicated software or
              expensive hardware. Our mobile-first approach means any recorder with a smartphone
              can log readings from anywhere.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Companies Tracked", value: "50+" },
              { label: "Daily Readings", value: "200+" },
              { label: "Uptime", value: "99.9%" },
              { label: "User Roles", value: "3" },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-3xl font-extrabold mb-1" style={{ color: "#FF8B3D" }}>{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6" style={{ backgroundColor: "#fff7f0" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-500 leading-relaxed text-lg">
            To give every business — large or small — a clear view of their utility usage,
            so they can reduce waste, control costs, and make better decisions with accurate data.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="flex flex-col gap-6">
            {[
              { step: "01", title: "Admin sets up companies", desc: "Super Admin creates companies and assigns Recorder and Company Admin users to them." },
              { step: "02", title: "Recorders log daily readings", desc: "Each recorder opens the app, selects a company, and enters the meter value for today." },
              { step: "03", title: "Usage is calculated automatically", desc: "The system calculates daily usage, flags missing readings, and builds monthly summaries." },
              { step: "04", title: "Admins review analytics", desc: "Company Admins and Super Admins view dashboards with trends, opening/closing values, and history." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start p-6 rounded-2xl border border-gray-100">
                <div className="text-2xl font-extrabold shrink-0" style={{ color: "#FF8B3D" }}>{item.step}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 text-center" style={{ backgroundColor: "#FF8B3D" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">Get in touch</h2>
          <p className="text-orange-100 mb-6">Have questions about our platform? We'd love to hear from you.</p>
          <a
            href="mailto:support@krupaUdyog.com"
            className="inline-block bg-white rounded-xl px-8 py-3 font-semibold transition-opacity hover:opacity-90"
            style={{ color: "#FF8B3D" }}
          >
            support@krupaUdyog.com
          </a>
        </div>
      </section>
    </div>
  );
}
