import { cn } from '@/lib/utils';
import type { FC } from 'react';

export const TraderCore: FC<{ className?: string }> = ({ className }) => {
    return (
        <span className={cn('font-bold', className)}>
            <span className="text-foreground">Trader</span>
            <span className="text-primary">Core</span>
        </span>
    );
};
