import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Greenetix Indonesia - Transformasi Limbah Popok",
    description: "Greenetix Indonesia mengolah limbah popok menjadi produk bernilai tinggi melalui ekonomi sirkular.",
    keywords: ["Greenetix Indonesia", "pengolahan limbah popok", "ekonomi sirkular", "produk ramah lingkungan"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className="scroll-smooth">
            <body className={inter.className} suppressHydrationWarning>{children}</body>
        </html>
    );
}
