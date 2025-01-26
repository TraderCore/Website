import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4">
            <div className="space-y-2 text-center">
                <h1 className="font-bold text-4xl">404</h1>
                <p className="text-2xl">Page not found</p>
                <p className="text-muted-foreground">
                    The page you're looking for doesn't exist or has been moved.
                </p>
            </div>
            <div className="flex gap-2">
                <Button asChild>
                    <Link href="/">Go home</Link>
                </Button>
                <Button
                    variant="outline"
                    asChild
                >
                    <Link href="/contact">Contact support</Link>
                </Button>
            </div>
        </div>
    );
}
