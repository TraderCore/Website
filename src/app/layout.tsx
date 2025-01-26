import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/app/_components/header';
import { Footer } from './_components/footer';
import { Providers } from './providers';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    title: 'TraderCore',
    description:
        'TraderCore is a Open Source Trading CRM/Platform framework with infinite possibilities',
    keywords: [
        'trading',
        'crm',
        'platform',
        'open source',
        'trader',
        'forex',
        'trading platform',
        'trading framework',
        'trading crm',
        'trading software',
        'trading tools',
        'trading automation',
        'trading automation software',
        'trading automation tools',
        'investment platform',
        'financial software',
        'broker platform',
        'crypto trading',
        'cryptocurrency',
        'bitcoin trading',
        'stock trading',
        'commodities trading',
        'trade management',
        'risk management',
        'portfolio management',
        'market analysis',
        'trading signals',
        'trading indicators',
        'trading strategies',
        'algorithmic trading',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} dark font-sans antialiased`}>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
