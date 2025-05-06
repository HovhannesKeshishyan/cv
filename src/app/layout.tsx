import type {Metadata, Viewport} from "next";
import type {ReactNode} from "react";
import {ThemeProvider} from "@/components/theme-provider/theme-provider";

import { Roboto } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap"
})

import {siteUrl, metaDescription, metaTitle} from "@/constants/metadata";

export const viewport: Viewport = {
    themeColor: "#057267",
}

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: metaTitle,
    description: metaDescription,
    robots: "index, follow",
    authors: [{name: "Hovhannes Keshishyan"}],
    keywords: "Hovhannes, Keshishyan, CV, Resume, Skills, Bio, Frontend, Experience",
    openGraph: {
        title: metaTitle,
        description: metaDescription,
        type: "website",
        url: siteUrl,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Hovhannes Keshishyan",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: metaTitle,
        description: metaDescription,
        images: [`${siteUrl}/og-image.png`],
    },
};

interface Props {
    children: Readonly<ReactNode>
}

export default function RootLayout({children}: Props) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={roboto.className}>
        <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light">
            <div id="root">
                {children}
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
