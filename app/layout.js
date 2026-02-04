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
        <LanguageProvider>
          <GymProvider>
            <Navbar />
            {children}
          </GymProvider>
        </LanguageProvider>
      </body>
    </html >
  );
}
