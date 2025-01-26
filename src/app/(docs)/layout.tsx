import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy policy for TraderCore platform',
};

const PrivacyLayout: FC<PropsWithChildren> = ({ children }) => {
    return <main className="container mx-auto">{children}</main>;
};

export default PrivacyLayout;
