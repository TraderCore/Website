import { TraderCore } from '@/components/tradercore';
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
import {
    API_DOCS_SITE_LINK,
    CLOUD_SITE_LINK,
    DOCS_SITE_LINK,
    GITHUB_REPO_LINK,
    GUIDES_DOCS_SITE_LINK,
    SELF_HOSTING_DOCS_SITE_LINK,
} from '@/constant';
import { cn } from '@/lib/utils';
import {
    Banknote,
    Book,
    Briefcase,
    Cloud,
    Code,
    Earth,
    Frame,
    Github,
    Info,
    MapPin,
    Menu,
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
        href: DOCS_SITE_LINK,
        icon: <Book />,
    },
    {
        name: 'API Reference',
        description: 'Develop your own dashboard with our API',
        href: API_DOCS_SITE_LINK,
        icon: <Code />,
    },
    {
        name: 'Guides',
        description: 'Finding your way around the framework',
        href: GUIDES_DOCS_SITE_LINK,
        icon: <MapPin />,
    },
    {
        name: 'Self-Hosting',
        description: 'Self-hosting your own framework',
        href: SELF_HOSTING_DOCS_SITE_LINK,
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
        href: '/blog',
        icon: <Briefcase />,
    },
    {
        name: 'Open Source',
        description: 'Contribute to the framework',
        href: GITHUB_REPO_LINK,
        icon: <Code />,
    },
    {
        name: 'Community',
        description: 'Join our community',
        href: '/community',
        icon: <Users />,
    },
];

export const Header = () => {
    return (
        <header className="py-4">
            <div className="container mx-auto flex items-center justify-between gap-4">
                <div className="block md:hidden">
                    <Menu />
                </div>
                <Link href="/">
                    <h1 className="font-bold text-2xl">
                        <TraderCore />
                    </h1>
                </Link>

                <NavMenu />

                <div className="flex items-center gap-4">
                    {/* Cloud and Github */}
                    <Button asChild>
                        <Link
                            href={CLOUD_SITE_LINK}
                            target="_blank"
                        >
                            Cloud
                        </Link>
                    </Button>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="hover:text-primary"
                        asChild
                    >
                        <Link
                            href={GITHUB_REPO_LINK}
                            target="_blank"
                        >
                            <Github />
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

const NavMenu = () => {
    return (
        <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
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
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
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
                    <div className="flex items-center gap-2 font-medium text-sm leading-none">
                        {icon} {title}
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
