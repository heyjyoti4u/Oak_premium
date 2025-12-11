import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'; 
import AOSClient from './components/AOSClient'; 

export const metadata = {
  title: 'Oak Travel',
  description: 'Travel the world with us',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AOSClient /> 
        {children}
      </body>
    </html>
  );
}