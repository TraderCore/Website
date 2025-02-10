import { TraderCore } from '@/components/tradercore';
import { cn } from '@/lib/utils';
import {
    Check,
    GitBranch,
    GitCommit,
    GitPullRequest,
    Home,
} from 'lucide-react';
import type { FC } from 'react';

type PhaseProps = {
    title: string;
    subtitle: string;
    items: string[];
    icon: React.ReactNode;
    index: number;
};

const Phase: FC<PhaseProps> = ({ title, subtitle, items, icon, index }) => {
    const isEven = index % 2 === 0;
    return (
        <div className="relative flex flex-col md:flex-row md:justify-between md:gap-8">
            <div
                className={cn(
                    'ml-12 md:ml-0 md:w-1/2',
                    isEven ? 'md:text-right md:pr-20' : 'md:ml-auto md:pl-20',
                )}
            >
                <div
                    className={cn(
                        'flex items-center relative',
                        isEven ? 'md:justify-end' : 'md:justify-start',
                    )}
                >
                    <div
                        className={cn(
                            '-left-[52px] -translate-y-1/2 absolute top-1/2',
                            isEven
                                ? 'md:left-[calc(100%+20px)]'
                                : 'md:left-[-60px]',
                        )}
                    >
                        <div className="rounded-full bg-background border-2 border-primary p-2">
                            {icon}
                        </div>
                    </div>
                    <h3 className="font-semibold text-xl">{title}</h3>
                </div>
                <div className="mt-2">
                    <p className="text-muted-foreground">{subtitle}</p>
                    <ul className="list-inside text-sm text-muted-foreground">
                        {items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const phases = [
    {
        title: 'Phase 1: Foundation',
        subtitle: 'Core Trading Framework',
        icon: <Home className="h-5 w-5 text-primary" />,
        items: [
            'Open-source framework release',
            'Order execution engine',
            'Basic position management',
            'Developer documentation',
        ],
    },
    {
        title: 'Phase 2: Extensibility',
        subtitle: 'Plugin Ecosystem Launch',
        icon: <GitCommit className="h-5 w-5 text-primary" />,
        items: [
            'Plugin architecture & SDK',
            'Core trading plugins',
            'Plugin marketplace',
            'Community contribution guidelines',
        ],
    },
    {
        title: 'Phase 3: Advanced Trading',
        subtitle: 'Professional Trading Features',
        icon: <GitBranch className="h-5 w-5 text-primary" />,
        items: [
            'Advanced risk management system',
            'Multi-exchange integration',
            'Real-time market analytics',
            'Algorithmic trading support',
        ],
    },
    {
        title: 'Phase 4: Enterprise Scale',
        subtitle: 'Enterprise-Grade Solutions',
        icon: <GitPullRequest className="h-5 w-5 text-primary" />,
        items: [
            'High-availability architecture',
            'Enterprise support packages',
            'Advanced security features',
            'Custom deployment solutions',
        ],
    },
];

export const RoadmapSection: FC = () => {
    return (
        <section className="container mx-auto px-auto my-16">
            <div className="text-center mb-16">
                <h2 className="font-semibold text-4xl">Development Roadmap</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                    We are currently developing phase 1 of <TraderCore />, which
                    is the core trading framework. We wanted to make sure that
                    you stay informed about the progress of the project, so that
                    you never miss a beat.
                </p>
            </div>
            <div className="relative">
                {/* Vertical line */}
                <div className="-translate-x-1/2 absolute top-0 left-4 h-full w-0.5 bg-border md:left-1/2" />

                {/* Milestones */}
                <div className="space-y-12">
                    {phases.map((phase, i) => (
                        <Phase
                            key={phase.title}
                            {...phase}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
