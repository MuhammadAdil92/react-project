import { Info } from "lucide-react";
import type { KpiData, KpiSectionProps } from "../../types/kpi.types";
import { ProgressRing } from "./progressring";
import { StatCard } from "./StatCard";
import kpiData from "../../data/hajj-groups-project.json";



const CompletedTask: React.FC<KpiSectionProps> = ({ data = kpiData.kpi as KpiData }) => {
  const { progress, summary, stats } = data;
  return (
    <section className="w-full rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
      <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-[110px_minmax(0,1fr)] md:gap-4 xl:grid-cols-[110px_minmax(0,1.1fr)_1.7fr]">
        <div className="justify-self-center md:justify-self-auto">
          <ProgressRing percent={progress.percent} label={progress.label} />
        </div>

        <div className="min-w-0 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-1.5 md:justify-start">
            <h2 className="text-[15px] font-bold leading-snug text-blue-950 sm:text-base">
              <span>{summary.highlight}</span>{" "}
              <span className="font-bold">{summary.text}</span>
            </h2>
            <Info className="h-4 w-4 shrink-0 text-gray-400" />
          </div>
          <p className="mx-auto mt-1.5 max-w-lg text-xs leading-relaxed text-slate-600 sm:text-[13px] md:mx-0">
            {summary.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:col-span-2 xl:col-span-1 xl:grid-cols-5">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompletedTask