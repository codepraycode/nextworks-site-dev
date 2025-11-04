import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
// @ts-ignore: Allow importing global CSS without type declarations
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NextWorks Limited - ICT Infrastructure & Power Solutions",
    description:
        "NextWorks provides cutting-edge ICT infrastructure, power solutions, and automation systems that drive operational efficiency and profitability for organizations across industries in Africa.",
    keywords:
        "ICT solutions, network infrastructure, power solutions, automation systems, IT consulting, Nigeria, Africa, business technology",
    authors: [{ name: "NextWorks Limited" }],
    creator: "NextWorks Limited",
    publisher: "NextWorks Limited",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://www.nextworks.com.ng"),
    openGraph: {
        title: "NextWorks Limited - ICT Infrastructure & Power Solutions",
        description:
            "Transforming business through technology with innovative ICT infrastructure and power solutions",
        url: "https://www.nextworks.com.ng",
        siteName: "NextWorks Limited",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "NextWorks Limited - Technology Solutions",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "NextWorks Limited - ICT Infrastructure & Power Solutions",
        description:
            "Transforming business through technology with innovative ICT infrastructure and power solutions",
        images: ["/twitter-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    // verification: {
    //     google: "your-google-verification-code",
    // },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="light">
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <PopupWidget />
                </ThemeProvider>
            </body>
        </html>
    );
}
