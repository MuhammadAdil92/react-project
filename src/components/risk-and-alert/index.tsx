import { ArrowRight, CircleAlert, CircleCheck, TriangleAlert } from "lucide-react";
import hajjGroupsProject from "../../data/hajj-groups-project.json";

const { risksAndAlerts } = hajjGroupsProject;

const levelStyles: Record<string, string> = {
  High: "bg-red-50 text-red-600",
  Medium: "bg-orange-50 text-orange-600",
  Low: "bg-emerald-50 text-emerald-600",
};

const RiskAndAlert: React.FC = () => (
  <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
    <header className="mb-1 flex flex-wrap items-center justify-between gap-1">
      <h2 className="flex items-center gap-1.5 text-[13px] font-bold text-blue-950">
        <TriangleAlert className="h-5 w-5 fill-red-600 text-white" strokeWidth={2.5} />
        {risksAndAlerts.title}
      </h2>
      <button
        type="button"
        className="inline-flex items-center gap-1 hover:bg-black hover:text-white transition-colors hover:cursor-pointer rounded-md border border-slate-200 px-1.5 py-0.5 text-[9px] font-semibold text-blue-950 shadow-sm"
      >
        {risksAndAlerts.actionLabel}
        <ArrowRight className="h-3 w-3" />
      </button>
    </header>

    <div className="divide-y divide-slate-100">
      {risksAndAlerts.items.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-[16px_48px_minmax(0,1fr)] items-center gap-1.5 py-1"
        >
          {item.level === "Low" ? (
            <CircleCheck className="h-3.5 w-3.5 fill-emerald-600 text-white" strokeWidth={2.5} />
          ) : (
            <CircleAlert
              className={`h-3.5 w-3.5 ${
                item.level === "High"
                  ? "fill-red-600 text-white"
                  : "fill-orange-500 text-white"
              }`}
              strokeWidth={2.5}
            />
          )}
          <span
            className={`rounded px-1.5 py-0.5 text-start text-[9px] font-semibold ${levelStyles[item.level]}`}
          >
            {item.level}
          </span>
          <span className="text-[11px] leading-tight text-slate-700">{item.message}</span>
        </div>
      ))}
    </div>
  </section>
);

export default RiskAndAlert;
