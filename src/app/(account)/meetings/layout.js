import { Reddit_Mono } from "next/font/google";
import { Quicksand } from "next/font/google";
import {Providers} from "../../providers";
import "../../globals.css";

const inter = Quicksand({
    
    subsets: ["latin"]
});

export const metadata = {
  title: "Meetings - Disco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body className={inter.className}>
              <Providers>
                  <div>
                      {children}
                      </div>
        </Providers>
      </body>
    </html>
  );
}
