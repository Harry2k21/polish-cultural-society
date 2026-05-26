import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
 
export const metadata: Metadata = {
  title: 'Polish Cultural Society',
  description: 'Connecting Polish culture across the UK',
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-500 overflow-x-hidden">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}