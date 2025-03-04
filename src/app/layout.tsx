import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
