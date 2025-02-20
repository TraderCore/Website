import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

const featuredPosts = [
    {
        title: 'Getting Started with Algorithmic Trading',
        excerpt:
            'Learn the fundamentals of algorithmic trading and how to implement your first trading bot with TraderCore.',
        date: 'February 20, 2024',
        image: '/logo.png',
        link: '/blog/getting-started-algorithmic-trading',
    },
    {
        title: 'Risk Management Strategies for Traders',
        excerpt:
            'Discover essential risk management techniques to protect your trading capital and optimize returns.',
        date: 'February 18, 2024',
        image: '/logo.png',
        link: '/blog/risk-management-strategies',
    },
    {
        title: 'Building Custom Trading Indicators',
        excerpt:
            'Step-by-step guide to creating and implementing custom technical indicators in TraderCore.',
        date: 'February 15, 2024',
        image: '/logo.png',
        link: '/blog/custom-trading-indicators',
    },
];

export const BlogSection: FC = () => {
    return (
        <section className="container mx-auto py-16">
            <div className="flex justify-between items-center mb-12">
                <h2 className="font-semibold text-4xl">Latest from Our Blog</h2>
                <Button
                    variant="outline"
                    asChild
                >
                    <Link href="/blog">View All Posts</Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {featuredPosts.map((post) => (
                    <Card
                        key={post.title}
                        className="flex flex-col overflow-hidden"
                    >
                        <div className="relative h-48 w-full">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />
                        </div>
                        <CardHeader>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <CalendarDays className="h-4 w-4" />
                                {post.date}
                            </div>
                            <CardTitle className="line-clamp-2">
                                {post.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm line-clamp-3">
                                {post.excerpt}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="link"
                                asChild
                                className="px-0"
                            >
                                <Link href={post.link}>Read More →</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
