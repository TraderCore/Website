'use client';

import { env } from '@/lib/env.client';
import { ThemeProvider } from 'next-themes';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import type { FC, PropsWithChildren } from 'react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <CSPostHogProvider>{children}</CSPostHogProvider>
        </ThemeProvider>
    );
};

// PostHog
if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    });
}
const CSPostHogProvider: FC<PropsWithChildren> = ({ children }) => {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};
