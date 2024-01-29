import { roboto } from "@styles/fonts";
import "@styles/globals.css";
import NavBar from "components/NavBar";
import CustomThemeProvider from "lib/utils/CustomThemeProvider";

export const metadata = {
  title: "DevJourney",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} mx-auto h-full max-w-5xl bg-primary-light pb-32 text-primary-light dark:bg-primary-dark dark:text-primary-dark`}
      >
        <CustomThemeProvider>
          {/* Header */}
          <header>
            <NavBar />
          </header>

          {/* Main content */}
          <main className="flex min-h-screen max-w-5xl justify-center">
            {children}
          </main>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
