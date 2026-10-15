import { ClipboardCheck } from "lucide-react";
import hajjGroupsProject from "../../data/hajj-groups-project.json";

const { departmentReadiness } = hajjGroupsProject;

const readinessColor = (percent: number) => {
  if (percent >= 60) return "bg-emerald-600";
  if (percent <= 30) return "bg-red-500";
  return "bg-orange-400";
};

const DepartmentReadliness: React.FC = () => (
  <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
    <h2 className="mb-1 flex items-center gap-1.5 text-[13px] font-bold text-blue-950">
      <ClipboardCheck className="h-4 w-4 text-blue-950" strokeWidth={2.5} />
      {departmentReadiness.title}
    </h2>

    <div className="divide-y divide-slate-100">
      {departmentReadiness.departments.map((department) => (
        <div
          key={department.id}
          className="grid grid-cols-[34px_minmax(40px,0.8fr)_minmax(0,1.25fr)] items-center gap-1.5 py-[3px]"
        >
          <span className="text-[11px] font-bold leading-tight text-blue-950">{department.percent}%</span>
          <div
            className="h-[7px] overflow-hidden rounded-full bg-slate-100"
            role="progressbar"
            aria-label={`${department.name} readiness`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={department.percent}
          >
            <div
              className={`h-full rounded-full ${readinessColor(department.percent)}`}
              style={{ width: `${department.percent}%` }}
            />
          </div>
          <span className="text-[9px] leading-tight text-slate-600">
            {department.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default DepartmentReadliness;
