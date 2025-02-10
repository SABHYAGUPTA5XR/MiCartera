import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";
// import { initialBlobityOptions } from "@/utils/blobity.config";
// import useBlobity from "blobity/lib/react/useBlobity";
import CustomCursor from "./components/customCursor";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabhya Gupta - Computer Science Student",
  icons: [
    { rel: "icon", type: "image/png", url: "/S-logo-final.png" },
    { rel: "shortcut icon", type: "image/x-icon", url: "/favicon.ico" },
  ],
  description:
    "An AI & Software Enthusiast passionate about building intelligent systems. I blend creativity with technology to craft seamless digital experiences. Constantly exploring, learning, and turning ideas into reality.",
  keywords: [
    "frontend",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "india",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: {
    title: "Sabhya Gupta - Computer Science Student",
    description:
      "An AI & Software Enthusiast passionate about building intelligent systems. I blend creativity with technology to craft seamless digital experiences. Constantly exploring, learning, and turning ideas into reality.",
    url: "https://CHANGE_ME_LATER",
    siteName: "www.changemelater.com",
    images: [
      {
        url: "https://i.ibb.co/BKH80gdV/logo-Banner.png",
        width: 1200,
        height: 630,
        alt: "Sabhya Gupta - Computer Science Student",
      },
      {
        url: "https://i.ibb.co/zTRtf76z/logo-Layout.png",
        width: 800,
        height: 800,
        alt: "Sabhya Gupta - Computer Science Student",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabhya Gupta - Computer Science Student",
    description:
      "An AI & Software Enthusiast passionate about building intelligent systems. I blend creativity with technology to craft seamless digital experiences. Constantly exploring, learning, and turning ideas into reality.",
    creator: "@sabhyagupta4xr",
    images: ["https://i.ibb.co/BKH80gdV/logo-Banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <ThemeProvider>
          <ViewProvider>
            <Header />
            <CustomCursor />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
          </ThemeProvider>
      </body>
    </html>
  );
}
