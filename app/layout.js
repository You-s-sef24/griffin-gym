import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import GymProvider from './Contexts/GymContext';
import LanguageProvider from './Contexts/LanguageContext';
import './globals.css';

export const metadata = {
  title: 'Griffin Gym',
  description: 'Promotional website for Griffin Gym',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <GymProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </GymProvider>
      </body>
    </html >
  );
}
