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
        className={`${roboto.className} mx-auto h-full max-w-6xl bg-primary-light pb-32 text-primary-light dark:bg-primary-dark dark:text-primary-dark`}
      >
        <CustomThemeProvider>
          {/* Header/NavBar */}
          <header>
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
