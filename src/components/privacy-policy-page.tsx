import { LegalDocShell } from "@/components/legal-doc-shell"

const IconCheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" stroke="#ffb700" strokeWidth="1.5" />
    <path d="M6.5 10L8.5 12L13.5 8" stroke="#ffb700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function PrivacyPolicyPage() {
  return (
    <LegalDocShell activeHref="/privacy-policy">
      {/* Page header */}
      <div className="mb-12 flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="font-sans text-[12px] font-normal uppercase tracking-[3.6px] text-[#ffdba0]">
              REGULATORY FRAMEWORK
            </span>
            <h1 className="font-display text-5xl font-bold leading-[1] tracking-[-0.05em] text-[#fffbf7] md:text-7xl">
              Privacy{" "}
              <span className="text-[#ffb700]">Policy.</span>
            </h1>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1">
            <span className="font-sans text-[12px] uppercase tracking-[1.2px] text-[#d5c4ab]/40">
              VERSION CONTROL
            </span>
            <span className="font-display text-[14px] text-[#fffbf7]">
              Last Updated: October 24, 2024
            </span>
          </div>
        </div>

        <div className="flex h-[2px] w-full bg-[#201f1f]">
          <div className="h-full w-24 bg-[#ffb700]" />
        </div>
      </div>

      <article className="flex w-full max-w-none flex-col gap-24">
        <section>
          <div className="mb-6 flex items-center gap-4">
            <span className="font-display text-[18px] font-bold leading-7 text-[#ffb700]">01</span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.6px] text-[#fffbf7]">
              ARCHITECTURAL FOUNDATION
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[18px] leading-[29.25px] text-[#d5c4ab]">
              Hasnain Ayaz Agency (the &ldquo;Agency&rdquo;) operates the Developer Portal with a core commitment to the architectural integrity of your personal data. This Privacy Policy outlines our procedures for the acquisition, management, and protection of information within our ecosystem.
            </p>
            <p className="font-sans text-[18px] leading-[29.25px] text-[#d5c4ab]">
              By engaging with our platform, you acknowledge the structural paradigms defined herein. We prioritize data sovereignty and minimal footprint processing as part of our &ldquo;Precision in every byte&rdquo; philosophy.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-8 flex items-center gap-4">
            <span className="font-display text-[18px] font-bold leading-7 text-[#ffb700]">02</span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.6px] text-[#fffbf7]">
              INFLOW MATRIX (DATA COLLECTION)
            </h2>
          </div>
          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-lg border-l-2 border-[rgba(255,183,0,0.2)] bg-[#1c1b1b] px-8 py-8">
              <h3 className="font-display text-base font-bold text-[#ffdba0]">Explicit Inputs</h3>
              <p className="font-sans text-sm leading-5 text-[#d5c4ab]">
                Identifiers provided during portal authentication, including cryptographic signatures, email headers, and development team metadata.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border-l-2 border-[rgba(255,183,0,0.2)] bg-[#1c1b1b] px-8 py-8">
              <h3 className="font-display text-base font-bold text-[#ffdba0]">Telemetry Strings</h3>
              <p className="font-sans text-sm leading-5 text-[#d5c4ab]">
                Automated log files detailing API endpoint interactions, hardware abstraction layers, and geographical distribution of node requests.
              </p>
            </div>
          </div>
          <p className="font-sans text-base leading-[26px] text-[#d5c4ab]">
            We leverage industry-standard tracking primitives to maintain session persistence. These are stored locally within your secure client environment and are never transmitted to third-party advertising conglomerates.
          </p>
        </section>

        <section>
          <div className="mb-6 flex items-center gap-4">
            <span className="font-display text-[18px] font-bold leading-7 text-[#ffb700]">03</span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.6px] text-[#fffbf7]">
              LOGIC EXECUTION (USAGE PROTOCOLS)
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-sans text-[18px] leading-[29.25px] text-[#d5c4ab]">
              Data collected through the Ledger is strictly utilized for the following functional requirements:
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Provisioning and optimization of developer infrastructure.",
                "Securing network perimeters against unauthorized architectural intrusion.",
                "Asynchronous dispatch of critical system health notifications.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-[5px] shrink-0">
                    <IconCheckCircle />
                  </span>
                  <span className="font-sans text-[18px] leading-[29.25px] text-[#d5c4ab]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="mb-8 flex items-center gap-4">
            <span className="font-display text-[18px] font-bold leading-7 text-[#ffb700]">04</span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.6px] text-[#fffbf7]">
              DATA SOVEREIGNTY (YOUR RIGHTS)
            </h2>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-[rgba(255,251,247,0.05)] bg-[rgba(42,42,42,0.4)] p-10 backdrop-blur-[10px]">
            <div className="relative flex flex-col gap-6">
              <p className="font-sans text-base font-medium italic leading-[26px] text-[#e5e2e1]">
                &ldquo;The user retains ultimate authority over their digital identity. Our systems are merely stewards.&rdquo;
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  "[ RIGHT TO ACCESS ]",
                  "[ RIGHT TO RECTIFICATION ]",
                  "[ RIGHT TO ERASURE ]",
                  "[ RIGHT TO PORTABILITY ]",
                ].map((right) => (
                  <span
                    key={right}
                    className="font-display text-sm font-normal uppercase tracking-[1.4px] text-[rgba(255,183,0,0.8)]"
                  >
                    {right}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-display text-[18px] font-bold leading-7 text-[#ffb700]">05</span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.6px] text-[#fffbf7]">
              COMMUNICATION NODE
            </h2>
          </div>
          <div className="flex flex-col gap-8 rounded-lg border border-[rgba(255,255,255,0.05)] bg-[#0e0e0e] p-12">
            <p className="font-sans text-base leading-6 text-[#d5c4ab]">
              For inquiries regarding this structural policy or to initiate a data sovereignty request, please connect via our encrypted channel:
            </p>
            <div className="flex flex-wrap gap-12">
              <div className="flex flex-col gap-2">
                <span className="font-sans text-[12px] uppercase tracking-[-0.6px] text-[#d5c4ab]/40">
                  LEGAL REPOSITORY
                </span>
                <span className="font-display text-base text-[#e5e2e1]">
                  Hasnain Ayaz Agency Portal
                </span>
                <span className="font-sans text-sm text-[#d5c4ab]">
                  Cyber Park Tower IV, Suite 802
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-sans text-[12px] uppercase tracking-[-0.6px] text-[#d5c4ab]/40">
                  DIGITAL UPLINK
                </span>
                <a
                  href="mailto:privacy@ayaz.agency"
                  className="font-display text-base text-[#ffb700] underline decoration-[rgba(255,183,0,0.3)] transition-opacity hover:opacity-80"
                >
                  privacy@ayaz.agency
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </LegalDocShell>
  )
}
