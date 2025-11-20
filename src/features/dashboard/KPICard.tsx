import { TrendingUp, TrendingDown, type LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: number | string;
  subtitle?: string;
  icon: LucideIcon;
  iconColor?: string;
  trend?: {
    value: number;
    isPositive: boolean;
    label?: string;
  };
}

export function KPICard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconColor = 'blue',
  trend,
}: KPICardProps) {
  const iconColorClasses: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-600',
    yellow: 'bg-amber-50 text-amber-600',
    green: 'bg-emerald-50 text-emerald-600',
    purple: 'bg-violet-50 text-violet-600',
    indigo: 'bg-indigo-50 text-indigo-600',
  };

  const trendColorClasses = {
    positive: 'text-emerald-600',
    negative: 'text-red-600',
  };

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-sm transition-all duration-200 group">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-md ${iconColorClasses[iconColor] || iconColorClasses.blue}`}>
          <Icon className="w-4 h-4" />
        </div>
        {trend && (
          <div className={`flex items-center gap-0.5 text-[10px] font-medium ${trend.isPositive ? trendColorClasses.positive : trendColorClasses.negative}`}>
            {trend.isPositive ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            <span>{Math.abs(trend.value)}%</span>
          </div>
        )}
      </div>
      
      <div className="space-y-0.5">
        <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
          {value}
        </h3>
        <p className="text-xs font-normal text-gray-600 leading-tight">{title}</p>
        {subtitle && (
          <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">{subtitle}</p>
        )}
        {trend?.label && (
          <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{trend.label}</p>
        )}
      </div>
    </div>
  );
}

