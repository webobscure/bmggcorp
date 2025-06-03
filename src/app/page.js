import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header";
import { LanguageProvider } from "./context/LanguageContext";
import Footer from "./components/Footer/Footer";
import App from "./App";

export default function Home() {
  return (
    <>
      <LanguageProvider>
     <App />
      </LanguageProvider>
    </>
  );
}
