import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { GITHUB_REPO_LINK, PLUGIN_SITE_LINK } from '@/constant';
import { Frame, Plug, Users } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';
import CurrencyPairWidget from '../widgets/currencyPairWidget';
import EarningsWidget from '../widgets/earningWidget';
import EquityWidget from '../widgets/equityWidget';

export const OfferingsSection: FC = () => {
    return (
        <section className="container mx-auto">
            <h2 className="mb-8 font-semibold text-4xl">
                What are you getting?
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Frame className="h-5 w-5" /> Open Source Trading
                            Framework
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm">
                            We provide a fully open-source trading framework
                            that you can use to build your own trading company
                            or solution.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild>
                            <Link href={GITHUB_REPO_LINK}>
                                Look at the code
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Plug className="h-5 w-5" /> Plugin Ecosystem
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm">
                            If you want to add a new feature to your trading
                            framework, you can do so with our plugin system.
                            Technically minded or not, you can easily add new
                            features to your trading framework.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild>
                            <Link href={PLUGIN_SITE_LINK}>View plugins</Link>
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Users className="h-5 w-5" /> Community Support
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm">
                            Due to our open-source nature, we have a community
                            of traders and developers who are passionate about
                            trading and technology.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild>
                            <Link href="/community">Join the community</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
};
