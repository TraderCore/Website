import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Frame, Plug, Users } from 'lucide-react';
import type { FC } from 'react';
import CurrencyPairWidget from '../widgets/currencyPairWidget';
import EarningsWidget from '../widgets/earningWidget';
import EquityWidget from '../widgets/equityWidget';

export const OfferingsSection: FC = () => {
    return (
        <section className="container mx-auto">
            <h2 className="text-4xl font-semibold mb-8">
                What are you getting?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Frame className="w-5 h-5" /> Open Source Trading
                            Framework
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">
                            We provide a fully open-source trading framework
                            that you can use to build your own trading company
                            or solution.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button>Look at the code</Button>
                    </CardFooter>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Plug className="w-5 h-5" /> Plugin Ecosystem
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">
                            If you want to add a new feature to your trading
                            framework, you can do so with our plugin system.
                            Technically minded or not, you can easily add new
                            features to your trading framework.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button>View plugins</Button>
                    </CardFooter>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Users className="w-5 h-5" /> Community Support
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">
                            Due to our open-source nature, we have a community
                            of traders and developers who are passionate about
                            trading and technology.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button>Join the community</Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
};
