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
        className={`${roboto.className} flex h-full flex-col items-center bg-primary-light pb-32 text-primary-light dark:bg-primary-dark dark:text-primary-dark`}
      >
        <CustomThemeProvider>
          {/* NavBar */}
          <header className="sticky top-0 z-50 m-0 flex w-full justify-center overflow-hidden bg-slate-500 p-0 dark:bg-slate-900">
            <NavBar />
          </header>

          {/* Main content */}
          <main className="flex min-h-screen max-w-6xl justify-center">
            {children}
          </main>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
