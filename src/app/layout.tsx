import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Erlangga Juni Saputra | Full Stack Engineer",
  description: "Personal website of Erlangga Juni Saputra, a Full Stack Engineer specializing in scalable backend systems with Go and modern frontend interfaces with React/TypeScript.",
  keywords: ["Erlangga Juni Saputra", "Full Stack Engineer", "Backend Developer Go", "Software Engineer Indonesia", "Golang Developer"],
  authors: [{ name: "Erlangga Juni Saputra" }],
  openGraph: {
    title: "Erlangga Juni Saputra | Full Stack Engineer",
    description: "Specializing in Scalable Backend with Go & Modern Frontend",
    url: "https://erlanggajuni.dev",
    siteName: "Erlangga Juni Saputra Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erlangga Juni Saputra | Full Stack Engineer",
    description: "Specializing in Scalable Backend with Go & Modern Frontend",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0ea5e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 min-h-screen flex flex-col transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
