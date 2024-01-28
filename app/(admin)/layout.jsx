import { roboto } from "@styles/fonts";
import "@styles/globals.css";
import CMSNavBar from "@components/CMSNavBar";
import CustomThemeProvider from "lib/utils/CustomThemeProvider";

export const metadata = {
  title: "DevJourney Sanity Studio",
  description: "Sanity Studio CMS GUI for DevJourney",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} text-primary-light dark:text-primary-dark mx-auto h-full max-w-5xl bg-transparent`}
      >
        <CustomThemeProvider>
          <CMSNavBar />
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
