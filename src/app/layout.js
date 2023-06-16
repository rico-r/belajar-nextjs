import "./globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";

library.add(fas);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LayarTV",
  description: "Website saya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-200"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
