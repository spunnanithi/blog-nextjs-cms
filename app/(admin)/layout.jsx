import { roboto } from "@styles/fonts";
import "@styles/globals.css";
import CMSNavBar from "@components/NavBar/CmsNavBar";
import CustomThemeProvider from "lib/utils/CustomThemeProvider";

export const metadata = {
  title: "DevJourney Sanity Studio",
  description: "Sanity Studio CMS GUI for DevJourney",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} mx-auto h-full max-w-7xl bg-transparent text-primary-light dark:text-primary-dark`}
      >
        <CustomThemeProvider>
          <CMSNavBar />
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
