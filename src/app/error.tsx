'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4">
            <div className="space-y-2 text-center">
                <h1 className="font-bold text-4xl">Something went wrong!</h1>
                <p className="text-muted-foreground">
                    An error occurred while processing your request.
                </p>
            </div>
            <div className="flex gap-2">
                <Button onClick={() => reset()}>Try again</Button>
                <Button
                    variant="outline"
                    onClick={() => router.push('/')}
                >
                    Go home
                </Button>
            </div>
        </div>
    );
}
