import MainHeader from '@/components/main-header/main-header.js';
import Sidebar from '@/components/sidebar/sidebar';

import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <MainHeader />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
