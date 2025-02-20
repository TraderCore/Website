import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { BookOpen, Code2, Compass, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

const documentationItems = [
    {
        title: 'Getting Started',
        icon: Compass,
        description:
            'New to TraderCore? Start here with our comprehensive setup guide and basic concepts.',
        link: '/docs/getting-started',
    },
    {
        title: 'Developer Guide',
        icon: Code2,
        description:
            'Technical documentation for developers looking to build with TraderCore framework.',
        link: '/docs/developer',
    },
    {
        title: 'Trading Guides',
        icon: GraduationCap,
        description:
            'Learn trading strategies, risk management, and best practices for successful trading.',
        link: '/docs/trading-guides',
    },
    {
        title: 'API Reference',
        icon: BookOpen,
        description:
            'Complete API documentation for integrating and extending TraderCore functionality.',
        link: '/docs/api',
    },
];

export const DocumentationSection: FC = () => {
    return (
        <section className="container mx-auto py-16 bg-muted/30">
            <div className="text-center mb-12">
                <h2 className="font-semibold text-4xl mb-4">
                    Documentation & Resources
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Everything you need to know about TraderCore. From getting
                    started guides to advanced development documentation.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {documentationItems.map((item) => (
                    <Card
                        key={item.title}
                        className="flex flex-col hover:shadow-lg transition-shadow"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <item.icon className="h-5 w-5" />
                                {item.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm">
                                {item.description}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="outline"
                                asChild
                                className="w-full"
                            >
                                <Link href={item.link}>Read More</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="mt-12 text-center">
                <Button
                    size="lg"
                    asChild
                >
                    <Link href="/docs">Browse All Documentation</Link>
                </Button>
            </div>
        </section>
    );
};
