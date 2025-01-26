import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from './_components/footer';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    title: 'TraderCore',
    description:
        'TraderCore is a Open Source Trading CRM/Platform framework with infinite possibilities',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased dark font-sans`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
