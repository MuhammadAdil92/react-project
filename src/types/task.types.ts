import type { KpiStat, StatVariant } from "./kpi.types";

export interface CompletionRateData {
  progress: {
    percent: number;
    label: string;
  };
  title: string;
  description: string;
  completionSummary: {
    completed: number;
    total: number;
    upcomingNotStarted: number;
    upcomingTotal: number;
  };
  stats: KpiStat[];
  totalCompanyTasks: number;
}



export interface ProgressRingProps {
    percent: number;
    label: string;
    size?: number;
    strokeWidth?: number;
  }

export const progressColors: Record<StatVariant, string> = {
  success: "bg-emerald-600",
  info: "bg-blue-600",
  danger: "bg-red-500",
  warning: "bg-amber-400",
  purple: "bg-violet-500",
};


export const statusStyles: Record<
  StatVariant,
  { background: string; label: string; value: string }
> = {
  success: {
    background: "bg-emerald-50",
    label: "text-emerald-800",
    value: "text-blue-950",
  },
  info: {
    background: "bg-blue-50",
    label: "text-blue-700",
    value: "text-blue-700",
  },
  danger: {
    background: "bg-red-50",
    label: "text-red-700",
    value: "text-red-700",
  },
  warning: {
    background: "bg-orange-50",
    label: "text-amber-700",
    value: "text-amber-800",
  },
  purple: {
    background: "bg-violet-50",
    label: "text-violet-700",
    value: "text-violet-700",
  },
};