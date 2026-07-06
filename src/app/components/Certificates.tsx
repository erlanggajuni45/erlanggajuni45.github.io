import { Certificate } from "@/data/portfolio";

export default function Certificates({
  certificatesData,
  linkedinUrl
}: {
  certificatesData: Certificate[];
  linkedinUrl: string;
}) {
  return (
    <section
      id="certificates"
      className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors"
    >
      <div className="container">
        {/* Section Header */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Certificates & Credentials
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Selected professional certifications and course completions verifying my technical expertise.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {certificatesData.map((cert, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Certificate Icon / Badge */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary dark:bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 stroke-current fill-none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>

                {/* Certificate Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors leading-tight">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="flex flex-col gap-1 mb-6 text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {cert.issuer}
                  </span>
                  <span>Issued {cert.issueDate}</span>
                </div>
              </div>

              {/* Verify Link */}
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors self-start"
              >
                Verify Credential
                <svg
                  className="w-4 h-4 stroke-current fill-none transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-800 transition-all duration-300"
          >
            <span>View All on LinkedIn</span>
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
