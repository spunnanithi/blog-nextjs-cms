import Footer from "@components/Footer/Footer";
import { roboto } from "@styles/fonts";
import "@styles/globals.css";
import NavBar from "@components/NavBar/NavBar";
import CustomThemeProvider from "lib/utils/CustomThemeProvider";
import {
  META_HOME_DESCRIPTION,
  META_SEO_KEYWORDS,
  WEBSITE_NAME,
} from "@constants/_APP_CONSTANTS";

export const metadata = {
  title: `Home | ${WEBSITE_NAME}`,
  description: META_HOME_DESCRIPTION,
  keywords: META_SEO_KEYWORDS,
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${roboto.className} flex h-full flex-col items-center bg-primary-light  text-primary-light dark:bg-primary-dark dark:text-primary-dark`}
      >
        <CustomThemeProvider>
          {/* NavBar */}
          <header className="sticky top-0 z-50 m-0 flex w-full justify-center overflow-hidden bg-myGreyBlue p-0 dark:bg-slate-900">
            <NavBar />
          </header>

          {/* Main content */}
          <main className="flex min-h-screen w-full justify-center pb-40">
            {children}
          </main>

          {/* Footer section */}
          <footer className="z-20 w-full bg-myGreyBlue dark:bg-slate-900">
            <Footer />
          </footer>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
