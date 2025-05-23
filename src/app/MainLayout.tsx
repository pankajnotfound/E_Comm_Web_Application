'use client';

import { usePathname } from 'next/navigation';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname ===  '/register' || pathname ===  '/login' || pathname === '/becomevendor' ;

  return (
    <>
      {!hideLayout && <Header />}
        <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}