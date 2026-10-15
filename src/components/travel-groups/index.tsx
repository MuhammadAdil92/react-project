

import {
  ArrowRight,
  Award,
  Box,
  Building,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  Clock,
  Layers,
  RefreshCw,
  Settings,
  Star,
  Tent,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import chiefExecutiveOfficer from "../../data/chief-executive-officer.json";
import cardImage1 from "../../assets/banner/hajj-groups-banner-1.png";
import cardImage2 from "../../assets/banner/hajj-groups-banner-2.png";
import cardImage3 from "../../assets/banner/hajj-groups-banner-3.png";
import cardImage4 from "../../assets/banner/hajj-groups-banner-4.png";
import cardImage5 from "../../assets/banner/hajj-groups-banner-5.png";
import cardImage6 from "../../assets/banner/hajj-groups-banner-7.png";
import cardImage7 from "../../assets/banner/hajj-groups-banner-8.png";

interface ProjectCardData {
  id: string;
  name: string;
  percent: number;
  completed: number;
  departmentCount: number;
  icon: string;
  stats: {
    completed: number;
    inProgress: number;
    delayed: number;
    notStarted: number;
    upcoming: number;
  };
}

const projects = chiefExecutiveOfficer.projectCards as ProjectCardData[];

const projectIcons: Record<string, LucideIcon> = {
  Building2,
  Tent,
  Box,
  Settings,
  Award,
  Star,
  UsersRound,
  Building,
};

const projectImages = [
  cardImage1,
  cardImage2,
  cardImage3,
  cardImage4,
  cardImage5,
  cardImage6,
  cardImage7,
];

const statusConfig = [
  {
    key: "completed",
    label: "Completed",
    Icon: Check,
    colors: "bg-emerald-50 text-emerald-700",
  },
  {
    key: "inProgress",
    label: "In Progress",
    Icon: RefreshCw,
    colors: "bg-blue-50 text-blue-700",
  },
  {
    key: "delayed",
    label: "Delayed",
    Icon: CircleAlert,
    colors: "bg-red-50 text-red-700",
  },
  {
    key: "notStarted",
    label: "Not Started",
    Icon: Clock,
    colors: "bg-orange-50 text-orange-700",
  },
  {
    key: "upcoming",
    label: "Upcoming",
    Icon: Layers,
    colors: "bg-violet-50 text-violet-700",
  },
] as const;

const formatNumber = (value: number) => value.toLocaleString();

const TravelGroups: React.FC = () => (
  <section
    aria-label="Company projects and entities"
    className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-12"
  >
    {projects.map((project, index) => {
      const ProjectIcon = projectIcons[project.icon];
      const totalTasks = Object.values(project.stats).reduce(
        (sum, count) => sum + count,
        0,
      );
      const assignedTasks = totalTasks - project.stats.upcoming;

      return (
        <article
          key={project.id}
          className={`min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_2px_10px_rgba(15,23,42,0.10)] ${
            index < 3 ? "xl:col-span-4" : "xl:col-span-3"
          }`}
        >
          <div
            className="relative flex h-[82px] items-center justify-between gap-2 bg-cover bg-center px-3 py-2 sm:h-[88px]"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.12) 38%, rgba(255,255,255,0.96) 68%, #fff 100%), url(${projectImages[index % projectImages.length]})`,
            }}
          >
            <div className="z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-blue-950 text-white shadow-md sm:h-[58px] sm:w-[58px]">
              <ProjectIcon
                aria-hidden="true"
                className="h-7 w-7"
                strokeWidth={2.2}
              />
            </div>

            <div className="z-10 min-w-0 text-right">
              <h3 className="flex items-center justify-end gap-1 text-xs font-bold leading-tight text-blue-950 sm:text-sm">
                <span className="truncate">{project.name}</span>
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                  strokeWidth={2.5}
                />
              </h3>
              <p className="mt-1 text-xs leading-tight text-slate-700 sm:text-sm">
                <strong className="text-blue-950">{project.percent}%</strong>{" "}
                <span className="font-semibold">Completed</span>
              </p>
              <p className="mt-0.5 text-[10px] leading-tight text-slate-600 sm:text-xs">
                {formatNumber(project.completed)} of {formatNumber(assignedTasks)}{" "}
                tasks completed
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-1.5 px-2.5 py-2 sm:gap-2 sm:px-3">
            {statusConfig.map(({ key, label, Icon, colors }) => (
              <div
                key={key}
                className={`flex min-h-[52px] min-w-0 flex-col items-center justify-center rounded-md px-0.5 py-1 ${colors}`}
              >
                {key === "completed" ? (
                  <span className="mb-0.5 flex h-[14px] w-[14px] items-center justify-center rounded-full bg-emerald-700 text-white">
                    <Check aria-hidden="true" className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                ) : (
                  <Icon
                    aria-hidden="true"
                    className={`mb-0.5 h-[14px] w-[14px] ${
                      key === "delayed" ? "fill-red-600 text-white" : ""
                    } ${key === "notStarted" ? "text-orange-500" : ""} ${
                      key === "inProgress" ? "text-blue-600" : ""
                    } ${key === "upcoming" ? "fill-violet-600 text-violet-600" : ""}`}
                    strokeWidth={2.7}
                  />
                )}
                <span className="text-[11px] font-bold leading-tight sm:text-xs">
                  {formatNumber(project.stats[key])}
                </span>
                <span className="mt-0.5 text-center text-[8px] font-medium leading-tight sm:text-[9px]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex min-h-[36px] items-center justify-between gap-2 border-t border-slate-100 px-3 py-1.5">
            <p className="min-w-0 truncate text-[10px] leading-tight text-slate-700 sm:text-xs">
              <strong className="text-blue-950">{project.departmentCount}</strong>{" "}
              Departments <span className="px-0.5 text-slate-400">·</span>{" "}
              <strong className="text-blue-950">{formatNumber(totalTasks)}</strong>{" "}
              Tasks
            </p>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-slate-200 px-2 py-1 text-[10px] font-semibold text-blue-950 sm:text-[11px]">
              View Departments
              <ArrowRight aria-hidden="true" className="h-3 w-3" />
            </span>
          </div>
        </article>
      );
    })}
  </section>
);

export default TravelGroups;