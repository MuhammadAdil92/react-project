import type { StatCardProps } from "../../types/kpi.types";
import { STAT_VARIANTS } from "../../types/statVariants";


export function StatCard({ stat }: StatCardProps) {
  const config = STAT_VARIANTS[stat.variant];
  const Icon = config.icon;
  const isDanger = stat.variant === "danger";
  const hasFilledBadge = stat.variant === "success" || stat.variant === "warning";
  const isPurple = stat.variant === "purple";

  return (
    <div
      className={`flex min-h-[88px] min-w-0 flex-col items-center justify-center gap-0.5 rounded-lg ${config.bg} px-1.5 py-2 sm:min-w-0`}
    >
      {isDanger ? (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-sm font-bold leading-none text-white">
          !
        </span>
      ) : (
        <Icon
          className={
            hasFilledBadge
              ? `h-6 w-6 rounded-full p-1 text-white ${
                  stat.variant === "success" ? "bg-emerald-700" : "bg-orange-500"
                }`
              : `h-5 w-5 ${config.iconColor} ${isPurple ? "fill-current" : ""}`
          }
          strokeWidth={hasFilledBadge ? 3 : 2.5}
        />
      )}
      <span className={`text-xl font-bold leading-tight ${config.valueColor}`}>
        {stat.value.toLocaleString()}
      </span>
      <span className={`text-center text-[10px] font-medium leading-tight ${config.labelColor}`}>
        {stat.label}
      </span>
    </div>
  );
}