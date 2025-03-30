import type {Metadata, Viewport} from "next";
import type {ReactNode} from "react";
import "./globals.scss";

import {ThemeProvider} from "@/components/theme-provider/theme-provider";
import {metaDescription, metaTitle} from "@/constants/metadata";

export const viewport: Viewport = {
    themeColor: "#057267",
}

export const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,
    robots: "index, follow",
    authors: [{name: "Hovhannes Keshishyan"}],
    keywords: "Hovhannes, Keshishyan, CV, Resume, Skills, Bio, Frontend, Experience",
    openGraph: {
        title: metaTitle,
        description: metaDescription,
        type: "website",
        // url: siteUrl,
        // images: [
        //     {
        //         url: "/og-image.png",
        //         width: 1200,
        //         height: 630,
        //         alt: "Hovhannes Keshishyan",
        //     },
        // ],
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: metaTitle,
    //     description: metaDescription,
    //     images: [`${siteUrl}/og-image.png`],
    // },
};

interface Props {
    children: Readonly<ReactNode>
}

export default function RootLayout({children}: Props) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
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
