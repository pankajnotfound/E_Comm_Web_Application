"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShieldAlt,
  faCookie,
  faLock,
  faUsersCog,
  faGavel,
  faEnvelope,
  faPenFancy,
} from "@fortawesome/free-solid-svg-icons";

const sections = [
  { id: "info", title: "Information We Collect", icon: faUser },
  { id: "usage", title: "How We Use Information", icon: faUsersCog },
  { id: "cookies", title: "Cookies and Tracking", icon: faCookie },
  { id: "security", title: "Data Security", icon: faLock },
  { id: "thirdparty", title: "Third-Party Services", icon: faShieldAlt },
  { id: "rights", title: "Your Rights", icon: faGavel },
  { id: "changes", title: "Changes to This Policy", icon: faPenFancy },
  { id: "contact", title: "Contact Information", icon: faEnvelope },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col md:flex-row max-w-7xl mx-auto py-12 px-6 md:px-12 gap-10">
      {/* Sidebar */}
      <nav className="sticky top-20 md:w-64 flex-shrink-0 bg-white rounded-lg shadow p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-indigo-600 pb-2">
          Privacy Policy
        </h2>
        <ul className="space-y-4">
          {sections.map(({ id, title, icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="flex items-center gap-3 text-indigo-700 hover:text-indigo-900 hover:underline transition"
              >
                <FontAwesomeIcon icon={icon} />
                <span className="font-medium">{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <article className="prose prose-indigo max-w-none flex-1 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-10 border-b-4 border-indigo-600 pb-3">
          Privacy Policy
        </h1>

        <p>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you visit our website.
        </p>

        <section id="info" className="pt-20">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>
            We collect personal information you provide directly, such as your
            name, email address, and payment information.
          </p>
        </section>

        <section id="usage" className="pt-20">
          <h2 className="text-xl font-semibold">2. How We Use Information</h2>
          <p>
            Your information helps us provide, maintain, and improve our
            services, communicate with you, and personalize your experience.
          </p>
        </section>

        <section id="cookies" className="pt-20">
          <h2 className="text-xl font-semibold">3. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to understand user
            behavior, enhance security, and provide personalized content.
          </p>
        </section>

        <section id="security" className="pt-20">
          <h2 className="text-xl font-semibold">4. Data Security</h2>
          <p>
            We implement appropriate measures to protect your data from
            unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section id="thirdparty" className="pt-20">
          <h2 className="text-xl font-semibold">5. Third-Party Services</h2>
          <p>
            We may share information with trusted third parties to facilitate
            our services, subject to confidentiality agreements.
          </p>
        </section>

        <section id="rights" className="pt-20">
          <h2 className="text-xl font-semibold">6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. Contact us to exercise these rights.
          </p>
        </section>

        <section id="changes" className="pt-20">
          <h2 className="text-xl font-semibold">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            posted here with an updated effective date.
          </p>
        </section>

        <section id="contact" className="pt-20">
          <h2 className="text-xl font-semibold">8. Contact Information</h2>
          <p>
            For questions about this policy, please reach out at{" "}
            <a
              href="mailto:privacy@example.com"
              className="text-indigo-600 hover:underline"
            >
              pankajjakhar808@gmail..com
            </a>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
