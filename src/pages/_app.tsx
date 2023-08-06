import { ClerkProvider } from "@clerk/nextjs";
import PageLayout from "@src/Components/Layout/PageLayout";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ClerkProvider>
  );
}
