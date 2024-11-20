import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// TransformaMix Trial Fonts
const transformamixExtraLight = localFont({
  src: "./fonts/TransformaMix_Trial-ExtraLight.woff2",
  weight: "200",
  variable: "--font-transformamix-extralight",
});
const transformamixLight = localFont({
  src: "./fonts/TransformaMix_Trial-Light.woff2",
  weight: "300",
  variable: "--font-transformamix-light",
});
const transformamixMedium = localFont({
  src: "./fonts/TransformaMix_Trial-Medium.woff2",
  weight: "500",
  variable: "--font-transformamix-medium",
});
const transformamixRegular = localFont({
  src: "./fonts/TransformaMix_Trial-Regular.woff2",
  weight: "400",
  variable: "--font-transformamix-regular",
});
const transformamixSemiBold = localFont({
  src: "./fonts/TransformaMix_Trial-SemiBold.woff2",
  weight: "600",
  variable: "--font-transformamix-semibold",
});

// TransformaSans Trial Fonts
const transformasansBlack = localFont({
  src: "./fonts/TransformaSans_Trial-Black.woff2",
  weight: "900",
  variable: "--font-transformasans-black",
});
const transformasansExtraBold = localFont({
  src: "./fonts/TransformaSans_Trial-ExtraBold.woff2",
  weight: "800",
  variable: "--font-transformasans-extrabold",
});
const transformasansBold = localFont({
  src: "./fonts/TransformaSans_Trial-Bold.woff2",
  weight: "700",
  variable: "--font-transformasans-bold",
});
const transformasansMedium = localFont({
  src: "./fonts/TransformaSans_Trial-Medium.woff2",
  weight: "500",
  variable: "--font-transformasans-medium",
});
const transformasansRegular = localFont({
  src: "./fonts/TransformaSans_Trial-Regular.woff2",
  weight: "400",
  variable: "--font-transformasans-regular",
});

// TransformaScript Trial Fonts
const transformascriptExtraLight = localFont({
  src: "./fonts/TransformaScript_Trial-ExtraLight.woff2",
  weight: "200",
  variable: "--font-transformascript-extralight",
});
const transformascriptLight = localFont({
  src: "./fonts/TransformaScript_Trial-Light.woff2",
  weight: "300",
  variable: "--font-transformascript-light",
});
const transformascriptMedium = localFont({
  src: "./fonts/TransformaScript_Trial-Medium.woff2",
  weight: "500",
  variable: "--font-transformascript-medium",
});
const transformascriptRegular = localFont({
  src: "./fonts/TransformaScript_Trial-Regular.woff2",
  weight: "400",
  variable: "--font-transformascript-regular",
});

export const metadata: Metadata = {
  title: "Reptilario y Ajolotario Quetzal - Conservación de la Biodiversidad",
  description:
    "Únete a nuestra misión de preservar la biodiversidad de Xochimilco. Aprende sobre el ajolote, reserva tours, y participa en actividades educativas para la conservación.",
  icons: {
    icon: "/assets/favicon.png", // Reference the favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Favicon for various sizes */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon.png"
        />
        <meta name="msapplication-TileImage" content="/assets/favicon.png" />
        <meta name="msapplication-TileColor" content="#4a9b98" />
        <meta name="theme-color" content="#4a9b98" />
      </head>
      <body
        className={`${transformamixExtraLight.variable} ${transformamixLight.variable} ${transformamixMedium.variable} ${transformamixRegular.variable} ${transformamixSemiBold.variable} ${transformasansBlack.variable} ${transformasansExtraBold.variable} ${transformasansBold.variable} ${transformasansMedium.variable} ${transformasansRegular.variable} ${transformascriptExtraLight.variable} ${transformascriptLight.variable} ${transformascriptMedium.variable} ${transformascriptRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
