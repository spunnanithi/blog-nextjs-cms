import "@styles/globals.css";
import { GeistSans } from "geist/font/sans";
import CustomThemeProvider from "lib/utils/CustomThemeProvider";
import {
  META_HOME_DESCRIPTION,
  META_SEO_KEYWORDS,
  WEBSITE_NAME,
} from "@constants/_APP_CONSTANTS";

// Dynamic imports
import { NavBar, Footer } from "@components/index";

export const metadata = {
  title: `Home | ${WEBSITE_NAME}`,
  description: META_HOME_DESCRIPTION,
  keywords: META_SEO_KEYWORDS,
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${GeistSans.className} flex h-full flex-col items-center bg-primary-light  text-primary-light dark:bg-primary-dark dark:text-primary-dark`}
      >
        <CustomThemeProvider>
          {/* NavBar */}
          <header className="sticky top-0 z-50 m-0 flex w-full justify-center overflow-hidden bg-secondary-light p-0 dark:bg-secondary-dark">
            <NavBar />
          </header>

          {/* Main content */}
          <main className="flex min-h-screen w-full justify-center pb-40">
            {children}
          </main>

          {/* Footer section */}
          <footer className="z-20 w-full bg-secondary-light dark:bg-secondary-dark">
            <Footer />
          </footer>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
