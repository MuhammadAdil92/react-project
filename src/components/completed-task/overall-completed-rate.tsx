import { Check, Clock, Info, Layers, RefreshCw } from "lucide-react";
import type { KpiStat } from "../../types/kpi.types";
import { ProgressRing } from "./progressring";
import chiefExecutiveOfficer from "../../data/chief-executive-officer.json";
import { progressColors, statusStyles, type CompletionRateData } from "../../types/task.types";


const data = chiefExecutiveOfficer.overallCompletedRate as CompletionRateData;

function CompletionStatusCard({ stat }: { stat: KpiStat }) {
  const styles = statusStyles[stat.variant];

  return (
    <div
      className={`flex min-h-[92px] min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1.5 py-2 ${styles.background}`}
    >
      {stat.variant === "success" && (
        <Check
          aria-hidden="true"
          className="h-6 w-6 rounded-full bg-emerald-700 p-1 text-white"
          strokeWidth={3}
        />
      )}
      {stat.variant === "info" && (
        <RefreshCw
          aria-hidden="true"
          className="h-6 w-6 text-blue-600"
          strokeWidth={2.5}
        />
      )}
      {stat.variant === "danger" && (
        <span
          aria-hidden="true"
          className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-sm font-bold leading-none text-white"
        >
          !
        </span>
      )}
      {stat.variant === "warning" && (
        <Clock
          aria-hidden="true"
          className="h-6 w-6 rounded-full bg-orange-500 p-1 text-white"
          strokeWidth={2.5}
        />
      )}
      {stat.variant === "purple" && (
        <Layers
          aria-hidden="true"
          className="h-6 w-6 fill-violet-600 text-violet-600"
          strokeWidth={2}
        />
      )}
      <span className={`text-center text-xs font-medium leading-tight ${styles.label}`}>
        {stat.label}
      </span>
      <span className={`text-[22px] font-bold leading-none ${styles.value}`}>
        {stat.value.toLocaleString()}
      </span>
    </div>
  );
}

const OverallCompletedRate: React.FC = () => {
  const total = data.stats.reduce((sum, stat) => sum + stat.value, 0);

  return (
    <section className="w-full rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[160px_minmax(0,1fr)] xl:grid-cols-[160px_minmax(0,1.1fr)_minmax(0,1.8fr)]">
        <div className="justify-self-center">
          <ProgressRing
            percent={data.progress.percent}
            label={data.progress.label}
            size={148}
            strokeWidth={11}
          />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-center text-base font-bold leading-snug text-blue-950 sm:text-lg md:text-left">
              {data.title}
            </h2>
            <Info
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-blue-950"
            />
          </div>
          <p className="mt-1.5 text-center text-xs leading-relaxed text-slate-600 sm:text-[13px] md:text-left">
            {data.description}
          </p>
          <p className="mt-4 text-center text-xs leading-relaxed text-blue-950 md:text-left">
            <strong>
              {data.completionSummary.completed} of{" "}
              {data.completionSummary.total}
            </strong>{" "}
            tasks completed, and{" "}
            <strong>
              {data.completionSummary.upcomingNotStarted.toLocaleString()} out of{" "}
              {data.completionSummary.upcomingTotal.toLocaleString()}
            </strong>{" "}
            upcoming tasks not started yet.
          </p>
        </div>

        <div className="min-w-0 md:col-span-2 xl:col-span-1">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
            {data.stats.map((stat) => (
              <CompletionStatusCard key={stat.id} stat={stat} />
            ))}
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div
              className="flex h-3 min-w-0 flex-1 overflow-hidden rounded-full bg-slate-100"
              role="img"
              aria-label={`Company task distribution across ${total.toLocaleString()} tasks`}
            >
              {data.stats.map((stat) => (
                <span
                  key={stat.id}
                  className={`${progressColors[stat.variant]} h-full`}
                  style={{ width: `${(stat.value / total) * 100}%` }}
                  title={`${stat.label}: ${stat.value.toLocaleString()}`}
                />
              ))}
            </div>
            <p className="shrink-0 whitespace-nowrap text-[11px] text-slate-600">
              All company tasks ·{" "}
              <strong className="text-blue-950">
                {data.totalCompanyTasks.toLocaleString()}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverallCompletedRate;