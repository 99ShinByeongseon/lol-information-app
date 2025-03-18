import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Riot App",
  description: "Riot API를 활용한 리그 오브 레전드 정보 앱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header>
          <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 text-white">
              <li>
                <Link href="/">홈</Link>
              </li>
              <li>
                <Link href="/champions">챔피언 목록</Link>
              </li>
              <li>
                <Link href="/items">아이템 목록</Link>
              </li>
              <li>
                <Link href="/rotation">챔피언 로테이션</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="min-h-screen bg-gray-900 text-gray-100">
          {children}
        </main>

        <footer className="bg-gray-800 p-4 text-center text-white">
          <p>© 2025 My Riot App</p>
        </footer>
      </body>
    </html>
  );
}
