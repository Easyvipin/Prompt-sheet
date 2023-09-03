import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import PageLayout from "@src/Components/Layout/PageLayout";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <ClerkProvider {...pageProps}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ClerkProvider>
    </ThemeProvider>
  );
}
