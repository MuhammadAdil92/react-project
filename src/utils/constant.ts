
import {
  Check,
  CircleAlert,
  Clock,
  Layers,
  RefreshCw,
} from "lucide-react";




export const statusItems = [
  {
    key: "completed",
    label: "Completed",
    Icon: Check,
    style: "bg-emerald-50 text-emerald-700",
    iconStyle: "rounded-full bg-emerald-700 p-[2px] text-white",
  },
  {
    key: "inProgress",
    label: "In Progress",
    Icon: RefreshCw,
    style: "bg-blue-50 text-blue-700",
    iconStyle: "text-blue-600",
  },
  {
    key: "delayed",
    label: "Delayed",
    Icon: CircleAlert,
    style: "bg-red-50 text-red-700",
    iconStyle: "fill-red-600 text-white",
  },
  {
    key: "notStarted",
    label: "Not Started",
    Icon: Clock,
    style: "bg-orange-50 text-orange-700",
    iconStyle: "text-orange-500",
  },
  {
    key: "upcoming",
    label: "Upcoming",
    Icon: Layers,
    style: "bg-violet-50 text-violet-700",
    iconStyle: "fill-violet-600 text-violet-600",
  },
] as const;