import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jakub Gania",
  description: "my personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className="antialiased bg-white"
      >
        <div className="flex flex-col justify-between pt-0 md:pt-12 lg:pt-16 p-6 md:p-8">
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: "@jakubgania", url: "https://x.com/jakubgania" },
    { name: "youtube", url: "https://youtube.com/@JakubGaniaSoftware" },
    { name: "linkedin", url: "https://www.linkedin.com/in/jakubgania/" },
    { name: "github", url: "https://github.com/jakubgania" }
  ]

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}
