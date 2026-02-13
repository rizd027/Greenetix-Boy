import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Greenetix Boy - Transformasi Limbah Popok",
    description: "Transformasi limbah popok menjadi produk bernilai tinggi: Media Tanam Inklusif (PUPO), Bahan Bakar Padat Briket (LIPOBAY), dan Bahan Bakar Cair (LF OIL)",
    keywords: ["greenetix", "limbah popok", "recycling", "circular economy", "eco-friendly", "sustainability"],
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
