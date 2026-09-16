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
              Krupa Udyog ("we", "our", or "us") operates the WIndicator mobile application (the "App").
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
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Account Deletion</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the right to request deletion of your account and all associated personal data at any time.
            </p>

            <h3 className="font-semibold text-gray-800 mb-2">How to request account deletion:</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Send an email to <a href="mailto:krupaudyog@gmail.com" className="hover:underline font-medium" style={{ color: "#FF8B3D" }}>krupaudyog@gmail.com</a> with subject line <strong>"Account Deletion Request"</strong></span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Include your registered email address in the request</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>We will process your request within <strong>7 business days</strong></span></li>
            </ul>

            <h3 className="font-semibold text-gray-800 mb-2">What gets deleted:</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Your account and login credentials</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Your personal information (name, email address)</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Your app activity and session data</span></li>
            </ul>

            <h3 className="font-semibold text-gray-800 mb-2">What may be retained:</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Meter readings you recorded — these are business records owned by the company and may be retained for operational continuity</span></li>
              <li className="flex gap-2"><span style={{ color: "#FF8B3D" }}>•</span><span>Records required by law or for legal compliance purposes</span></li>
            </ul>

            <div className="mt-4 p-5 rounded-xl border border-orange-100 bg-orange-50">
              <p className="font-semibold text-gray-900 mb-1">To delete your account:</p>
              <p className="text-gray-600 text-sm">Email us at <a href="mailto:krupaudyog@gmail.com" className="font-medium hover:underline" style={{ color: "#FF8B3D" }}>krupaudyog@gmail.com</a> with subject <strong>"Account Deletion Request"</strong> and your registered email. We'll confirm deletion within 7 business days.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-5 rounded-xl border border-gray-100 bg-orange-50">
              <p className="font-semibold text-gray-900">Krupa Udyog</p>
              <p className="text-gray-600 mt-1">Email: <a href="mailto:krupaudyog@gmail.com" className="hover:underline" style={{ color: "#FF8B3D" }}>krupaudyog@gmail.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
