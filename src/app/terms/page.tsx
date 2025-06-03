"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faUserShield,
  faClipboardList,
  faFileContract,
  faBalanceScale,
  faPenFancy,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms", icon: faCheckCircle },
  { id: "license", title: "Use License", icon: faClipboardList },
  { id: "responsibilities", title: "User Responsibilities", icon: faUserShield },
  { id: "ip", title: "Intellectual Property", icon: faFileContract },
  { id: "liability", title: "Limitation of Liability", icon: faBalanceScale },
  { id: "changes", title: "Changes to Terms", icon: faPenFancy },
  { id: "contact", title: "Contact Us", icon: faEnvelope },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col md:flex-row max-w-7xl mx-auto py-12 px-6 md:px-12 gap-10 pt-30">
      {/* Sidebar */}
      <nav className="sticky top-20 md:w-64 flex-shrink-0 bg-white rounded-lg shadow p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-indigo-600 pb-2">
          Terms & Conditions
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
          Terms & Conditions
        </h1>

        <p>
          Welcome to our website. By accessing or using our services, you agree
          to comply with the following terms and conditions:
        </p>

        <section id="acceptance" className="pt-20">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By using our website, you agree to be bound by these terms, all
            applicable laws, and regulations. If you disagree with any part,
            please do not use our services.
          </p>
        </section>

        <section id="license" className="pt-20">
          <h2 className="text-xl font-semibold">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials for personal, non-commercial transitory viewing only.
            This is the grant of a license, not a transfer of title.
          </p>
        </section>

        <section id="responsibilities" className="pt-20">
          <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
          <p>
            You agree not to misuse the website or its services, including but
            not limited to hacking, data mining, or transmitting harmful
            content.
          </p>
        </section>

        <section id="ip" className="pt-20">
          <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
          <p>
            All content, trademarks, and data on this website are the property
            of the company and protected by intellectual property laws.
          </p>
        </section>

        <section id="liability" className="pt-20">
          <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
          <p>
            In no event shall we be liable for any damages arising out of or
            related to your use of the website.
          </p>
        </section>

        <section id="changes" className="pt-20">
          <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued
            use of the website implies acceptance of updated terms.
          </p>
        </section>

        <section id="contact" className="pt-20">
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at{" "}
            <a
              href="mailto:support@example.com"
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
