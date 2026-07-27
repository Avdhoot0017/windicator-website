export default function Privacy() {
  return (
    <div className="py-16 px-6 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: July 2026</p>

        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Krupa Udyog ("we", "our", or "us") operates the Krupa Udyog mobile application (the "App").
              This Privacy Policy explains how we collect, use, and protect your information when you use our App.
              By using the App, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We collect the following types of information:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span><strong>Account Information:</strong> Your full name and email address, provided when your account is created by an administrator.</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span><strong>Usage Data:</strong> Meter readings you record, including meter values, dates, and optional notes.</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span><strong>App Activity:</strong> Which companies you recorded readings for and when.</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span><strong>Device Information:</strong> Basic device and OS information for app functionality.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>To authenticate you and provide access to the App</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>To record and store meter readings on behalf of your organization</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>To generate usage reports and analytics for company administrators</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>To maintain an audit trail of all meter recordings</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>To send account-related communications if needed</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We do <strong>not</strong> sell, trade, or share your personal data with third parties for marketing purposes.
              Your data is accessible only to:
            </p>
            <ul className="space-y-2 text-gray-600 mt-3">
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>You (the logged-in user)</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Company Admins assigned to your company</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Super Admins of the platform</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Google Cloud Platform (our hosting provider) — for infrastructure only</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Storage & Security</h2>
            <p className="text-gray-600 leading-relaxed">
              All data is stored on Google Cloud Platform servers (asia-south1 region). We use industry-standard
              security measures including encrypted connections (HTTPS/TLS), hashed passwords (bcrypt),
              and JWT-based authentication. While we strive to protect your data, no method of transmission
              over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your account data and meter readings for as long as your account is active or as needed
              to provide services to your organization. You may request deletion of your account by contacting
              your organization's administrator or reaching out to us directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-3">You have the right to:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Access the personal data we hold about you</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Request correction of inaccurate data</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Request deletion of your account and associated data</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Object to processing of your data in certain circumstances</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              This App is intended for business use by adults (18+). We do not knowingly collect data
              from anyone under the age of 18. If you believe a minor has provided us with personal
              information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page
              with an updated date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-5 rounded-xl border border-gray-100 bg-orange-50">
              <p className="font-semibold text-gray-900">Krupa Udyog</p>
              <p className="text-gray-600 mt-1">Email: <a href="mailto:support@krupaUdyog.com" className="hover:underline" style={{ color: "#FF8B3D" }}>support@krupaUdyog.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
