import {
  ArrowRight,
  Building2,
  Check,
  CircleAlert,
  Clock3,
  Layers3,
  RefreshCw,
} from "lucide-react";
import hajjGroupsProject from "../../data/hajj-groups-project.json";

const { travelCompanyReadiness } = hajjGroupsProject;

const readinessColor = (percent: number) => {
  if (percent >= 60) return "bg-emerald-600";
  if (percent >= 40) return "bg-orange-400";
  return "bg-red-500";
};

const statusStyles: Record<string, string> = {
  Completed: "bg-emerald-50 text-emerald-700",
  Delayed: "bg-red-50 text-red-600",
  "Missing Data": "bg-red-50 text-red-600",
  "In Progress": "bg-blue-50 text-blue-700",
  "Not Started": "bg-orange-50 text-orange-700",
  Upcoming: "bg-violet-50 text-violet-700",
};

const StatusIcon: React.FC<{ status: string }> = ({ status }) => {
  const iconClass = "h-3.5 w-3.5 shrink-0";

  if (status === "Completed") return <Check className={`${iconClass} rounded-full bg-emerald-700 p-0.5 text-white`} />;
  if (status === "Delayed" || status === "Missing Data") return <CircleAlert className={`${iconClass} text-white`} fill="#dc2626" />;
  if (status === "In Progress") return <RefreshCw className={`${iconClass} text-blue-600`} />;
  if (status === "Not Started") return <Clock3 className={`${iconClass} text-orange-500`} />;
  return <Layers3 className={`${iconClass} fill-violet-600 text-violet-600`} />;
};

const TravelCompanyReadliness: React.FC = () => (
  <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
    <header className="mb-1.5 flex flex-wrap items-center justify-between gap-1.5">
      <h2 className="flex items-center gap-1.5 text-[13px] font-bold text-blue-950">
        <Building2 className="h-4 w-4 text-blue-950" strokeWidth={2.5} />
        {travelCompanyReadiness.title}
      </h2>
      <button
        type="button"
        className="inline-flex items-center gap-1 hover:bg-black hover:text-white transition-colors hover:cursor-pointer rounded-md border border-slate-200 px-2 py-1 text-[9px] font-semibold text-blue-950 shadow-sm"
      >
        {travelCompanyReadiness.actionLabel}
        <ArrowRight className="h-3 w-3" />
      </button>
    </header>

    <div className="overflow-x-auto">
      <table className="w-full min-w-[400px] border-collapse text-left text-[11px] leading-[12px]">
        <thead>
          <tr className="border-y border-slate-200 text-blue-950">
            <th className="px-1.5 py-0.5 font-semibold">Travel Company</th>
            <th className="px-1.5 py-0.5 font-semibold">Readiness</th>
            <th className="px-1.5 py-0.5 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {travelCompanyReadiness.companies.map((company) => (
            <tr key={company.id} className="border-b border-slate-200 last:border-b-0">
              <td className="px-1.5 py-[2px]">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <span className={`flex h-4 w-4 shrink-0 items-center justify-center text-xs font-black ${company.color}`}>
                    {company.mark}
                  </span>
                  <span className="text-slate-700">{company.name}</span>
                </div>
              </td>
              <td className="px-1.5 py-[2px]">
                <div className="flex min-w-[105px] items-center gap-1.5">
                  <span className="w-7 shrink-0 font-bold text-blue-950">{company.percent}%</span>
                  <div
                    className="h-[7px] min-w-[42px] flex-1 overflow-hidden rounded-full bg-slate-100"
                    role="progressbar"
                    aria-label={`${company.name} readiness`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={company.percent}
                  >
                    <div
                      className={`h-full rounded-full ${readinessColor(company.percent)}`}
                      style={{ width: `${company.percent}%` }}
                    />
                  </div>
                </div>
              </td>
              <td className="px-1.5 py-[2px]">
                <div className="flex items-center gap-1.5">
                  <span className={`flex-1 whitespace-nowrap rounded px-1.5 py-0 font-semibold leading-tight ${statusStyles[company.status]}`}>
                    {company.status}
                  </span>
                  <StatusIcon status={company.status} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default TravelCompanyReadliness;
