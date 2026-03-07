import { CheckCircle2, ShieldCheck, Activity } from "lucide-react";

interface StatusBadgeProps {
    type: 'success' | 'warning' | 'info';
    label: string;
}

export const StatusBadge = ({ type, label }: StatusBadgeProps) => {
    const getStyles = () => {
        switch (type) {
            case 'success':
                return 'bg-primary/10 text-primary border-primary/20';
            case 'warning':
                return 'bg-warning/10 text-warning border-warning/20';
            default:
                return 'bg-secondary/10 text-secondary border-secondary/20';
        }
    };

    const Icon = type === 'success' ? CheckCircle2 : type === 'warning' ? Activity : ShieldCheck;

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${getStyles()} font-mono text-[10px] font-bold uppercase tracking-wider`}>
            <Icon className="w-3 h-3" />
            <span>{label}</span>
        </div>
    );
};
