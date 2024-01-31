import Footer from "@components/Footer";
import { roboto } from "@styles/fonts";
import "@styles/globals.css";
import NavBar from "components/NavBar";
import CustomThemeProvider from "lib/utils/CustomThemeProvider";

export const metadata = {
  title: "DevJourney",
  description: "My personal blog site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} flex h-full flex-col items-center bg-primary-light  text-primary-light dark:bg-primary-dark dark:text-primary-dark`}
      >
        <CustomThemeProvider>
          {/* NavBar */}
          <header className="sticky top-0 z-50 m-0 flex w-full justify-center overflow-hidden bg-myGreyBlue p-0 dark:bg-slate-900">
            <NavBar />
          </header>

          {/* Main content */}
          <main className="flex min-h-screen w-full max-w-6xl justify-center pb-40">
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
