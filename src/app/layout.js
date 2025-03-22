import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';

export const metadata = {
  title: "Fruitoholic",
  description: "A place to buy cold-pressed juices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
