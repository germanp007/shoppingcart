import { Providers } from "@/store/provider";
import { Inter, Poppins } from "next/font/google";
import Carrito from "./carrito/Carrito";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Shopping cart",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={poppins.className}>
          <Carrito />
          <div>{children}</div>
        </body>
      </Providers>
    </html>
  );
}
