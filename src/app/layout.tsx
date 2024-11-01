import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { LayoutWrapperComponent, Main } from "@/components/LayoutWrapper";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createMetadata, viewport } from "@/config/metadata";
import SchemaOrg from "@/components/SchemaOrg";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata();
export { viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <SchemaOrg type="Organization" />
        <SchemaOrg type="Website" />
      </head>
      <body>
        <Providers>
          <LayoutWrapperComponent>
            <Header />
            <Main id="main-content">{children}</Main>
            <Footer />
          </LayoutWrapperComponent>
        </Providers>
      </body>
    </html>
  );
}
