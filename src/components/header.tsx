import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import {
    Banknote,
    Book,
    Briefcase,
    Cloud,
    Code,
    Earth,
    Frame,
    Info,
    MapPin,
    Server,
    Users,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ListItemData {
    icon: React.ReactNode;
    name: string;
    description: string;
    href: string;
}

const products: ListItemData[] = [
    {
        name: 'Framework',
        description: 'Worlds-first Open-Source Trading Framework',
        href: '/framework',
        icon: <Frame />,
    },
    {
        name: 'Ecosystem',
        description:
            'A suite of tools and plugins to help you expand your platform',
        href: '/ecosystem',
        icon: <Earth />,
    },
    {
        name: 'Cloud',
        description: 'First-class cloud hosting for your trading framework',
        href: '/cloud',
        icon: <Cloud />,
    },
    {
        name: 'Billing',
        description: 'Unified billing for your trading framework',
        href: '/billing',
        icon: <Banknote />,
    },
];

const docs: ListItemData[] = [
    {
        name: 'Documentation',
        description: 'Documentation for the framework',
        href: 'https://docs.tradercore.dev',
        icon: <Book />,
    },
    {
        name: 'API Reference',
        description: 'Develop your own dashboard with our API',
        href: 'https://docs.tradercore.dev/api-reference',
        icon: <Code />,
    },
    {
        name: 'Guides',
        description: 'Finding your way around the framework',
        href: 'https://docs.tradercore.dev/guides',
        icon: <MapPin />,
    },
    {
        name: 'Self-Hosting',
        description: 'Self-hosting your own framework',
        href: 'https://docs.tradercore.dev/self-hosting',
        icon: <Server />,
    },
];

const company: ListItemData[] = [
    {
        name: 'About',
        description: 'What are we building?',
        href: '/about',
        icon: <Info />,
    },
    {
        name: 'Blog',
        description: 'Our latest news and updates',
        href: 'https://tradercore.net/blog',
        icon: <Briefcase />,
    },
    {
        name: 'Open Source',
        description: 'Contribute to the framework',
        href: 'https://github.com/tradercore',
        icon: <Code />,
    },
    {
        name: 'Community',
        description: 'Join our community',
        href: 'https://community.tradercore.net',
        icon: <Users />,
    },
];

export const Header = () => {
    return (
        <header className="py-4 border-b border-zinc-800">
            <div className="flex items-center gap-4 justify-between mx-auto px-4 container">
                <Link href="/">
                    <h1 className="text-2xl font-bold">
                        Trader
                        <span className="text-primary ml-0.5">Core</span>
                    </h1>
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Products
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                                    {products.map((product) => (
                                        <ListItem
                                            key={product.name}
                                            title={product.name}
                                            icon={product.icon}
                                            href={product.href}
                                        >
                                            {product.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                                    {docs.map((doc) => (
                                        <ListItem
                                            key={doc.name}
                                            title={doc.name}
                                            icon={doc.icon}
                                            href={doc.href}
                                        >
                                            {doc.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Company
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                                    {company.map((company) => (
                                        <ListItem
                                            key={company.name}
                                            title={company.name}
                                            icon={company.icon}
                                            href={company.href}
                                        >
                                            {company.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link
                                href="/contact"
                                legacyBehavior
                                passHref
                            >
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Contact
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center gap-4">
                    <Button>Cloud</Button>
                    <Button variant="outline">Billing</Button>
                </div>
            </div>
        </header>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'> & {
        title: string;
        icon?: React.ReactNode;
        href?: string;
    }
>(({ className, title, children, icon, href = '#', ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={href}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none flex items-center gap-2">
                        {icon} {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
