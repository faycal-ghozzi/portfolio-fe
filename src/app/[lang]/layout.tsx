import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <main>{children}</main>
    </LanguageProvider>
  );
}
