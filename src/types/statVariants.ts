import {
    Check,
    RefreshCw,
    CircleAlert,
    Clock,
    Layers,
    type LucideIcon,
  } from "lucide-react";
  import type { StatVariant } from "../types/kpi.types";
  
  interface VariantConfig {
    icon: LucideIcon;
    bg: string;
    iconColor: string;
    valueColor: string;
    labelColor: string;
  }
  
  export const STAT_VARIANTS: Record<StatVariant, VariantConfig> = {
    success: {
      icon: Check,
      bg: "bg-emerald-50",
      iconColor: "text-white",
      valueColor: "text-emerald-700",
      labelColor: "text-emerald-700",
    },
    info: {
      icon: RefreshCw,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      valueColor: "text-blue-700",
      labelColor: "text-blue-700",
    },
    danger: {
      icon: CircleAlert,
      bg: "bg-red-50",
      iconColor: "text-red-600",
      valueColor: "text-red-700",
      labelColor: "text-red-700",
    },
    warning: {
      icon: Clock,
      bg: "bg-orange-50",
      iconColor: "text-orange-500",
      valueColor: "text-orange-600",
      labelColor: "text-orange-700",
    },
    purple: {
      icon: Layers,
      bg: "bg-violet-50",
      iconColor: "text-violet-600",
      valueColor: "text-violet-700",
      labelColor: "text-violet-700",
    },
  };