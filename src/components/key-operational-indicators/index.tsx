import {
  ArrowRight,
  BookCheck,
  Check,
  CircleAlert,
  Clock3,
  Layers3,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import hajjGroupsProject from "../../data/hajj-groups-project.json";
import bannerImage from "../../assets/banner/bottom-right.png";
import type { KpiStat, StatVariant } from "../../types/kpi.types";

const { operationalIndicators } = hajjGroupsProject;
const stats = hajjGroupsProject.kpi.stats as KpiStat[];

const styles: Record<StatVariant, { bg: string; iconBg: string; value: string; label: string }> = {
  success: {
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-700",
    value: "text-emerald-800",
    label: "text-emerald-700",
  },
  info: {
    bg: "bg-blue-50",
    iconBg: "bg-transparent",
    value: "text-blue-800",
    label: "text-blue-700",
  },
  danger: {
    bg: "bg-red-50",
    iconBg: "bg-red-600",
    value: "text-red-700",
    label: "text-red-700",
  },
  warning: {
    bg: "bg-orange-50",
    iconBg: "bg-orange-500",
    value: "text-orange-700",
    label: "text-orange-700",
  },
  purple: {
    bg: "bg-violet-50",
    iconBg: "bg-transparent",
    value: "text-violet-700",
    label: "text-violet-700",
  },
};

const iconByVariant: Record<StatVariant, LucideIcon> = {
  success: Check,
  info: RefreshCw,
  danger: CircleAlert,
  warning: Clock3,
  purple: Layers3,
} as const;

const KeyOperationalIndicators: React.FC = () => (
  <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
    <header className="mb-1 flex flex-wrap items-center justify-between gap-1">
      <h2 className="flex items-center gap-1.5 text-[12px] font-bold text-blue-950">
        <BookCheck className="h-4 w-4 fill-blue-950 text-blue-950" strokeWidth={2.5} />
        {operationalIndicators.title}
      </h2>
      <button
        type="button"
        className="inline-flex hover:bg-black hover:text-white transition-colors hover:cursor-pointer items-center gap-1 rounded-md border border-slate-200 px-1.5 py-0.5 text-[9px] font-semibold text-blue-950 shadow-sm"
      >
        {operationalIndicators.actionLabel}
        <ArrowRight className="h-3 w-3" />
      </button>
    </header>

    <div className="grid grid-cols-5 gap-1.5">
      {stats.map((stat) => {
        const Icon = iconByVariant[stat.variant];
        const variantStyle = styles[stat.variant];

        return (
          <div
            key={stat.id}
            className={`flex min-h-[54px] min-w-0 flex-col items-center justify-center gap-0.5 rounded-md px-1 py-0.5 ${variantStyle.bg}`}
          >
            <span
              className={`flex h-[18px] w-[18px] items-center justify-center rounded-full ${
                stat.variant === "info" || stat.variant === "purple"
                  ? ""
                  : variantStyle.iconBg
              }`}
            >
              <Icon
                className={`h-3.5 w-3.5 ${
                  stat.variant === "success" || stat.variant === "danger" || stat.variant === "warning"
                    ? "text-white"
                    : stat.variant === "info"
                      ? "text-blue-600"
                      : "fill-violet-600 text-violet-600"
                }`}
                strokeWidth={2.8}
              />
            </span>
            <span className={`text-[13px] font-bold leading-tight ${variantStyle.value}`}>
              {stat.value.toLocaleString()}
            </span>
            <span className={`text-center text-[8px] font-medium leading-tight ${variantStyle.label}`}>
              {stat.label}
            </span>
          </div>
        );
      })}
    </div>

    <div
      className="relative mt-4 flex min-h-[44px] items-center justify-end gap-2 overflow-hidden rounded-md bg-cover bg-center px-2 py-1.5 text-right"
    >
    <img src={bannerImage} alt="Operational Indicators Banner" className=" inset-0 h-full w-full object-cover" />

    </div>
  </section>
);

export default KeyOperationalIndicators;
