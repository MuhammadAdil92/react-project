export type StatVariant = "success" | "info" | "danger" | "warning" | "purple";

export interface KpiProgress {
  percent: number;
  label: string;
}

export interface KpiSummary {
  highlight: string;
  text: string;
  description: string;
}

export interface KpiStat {
  id: string;
  value: number;
  label: string;
  variant: StatVariant;
  icon: keyof typeof import("lucide-react");
}

export interface KpiData {
  progress: KpiProgress;
  summary: KpiSummary;
  stats: KpiStat[];
}


export interface KpiSectionProps {
  data?: KpiData;
}



export interface StatCardProps {
  stat: KpiStat;
}