import { Building2, ChevronRight } from "lucide-react";
import chiefExecutiveOfficer from "../../data/chief-executive-officer.json";
import entityBanner from "../../assets/banner/hajj-groups-banner-8.png";
import { statusItems } from "../../utils/constant";

const data = chiefExecutiveOfficer.subsidiariesAndAffiliateEntities;


const formatNumber = (value: number) => value.toLocaleString();

const SubsidiariesAndAffiliateEntities: React.FC = () => (
  <section
    aria-label={data.title}
    className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_2px_10px_rgba(15,23,42,0.10)]"
  >
    <div className="grid min-w-0 grid-cols-1 items-center gap-2.5 p-2 sm:grid-cols-2 sm:p-2.5 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)_minmax(0,0.9fr)_minmax(0,0.7fr)_minmax(0,2fr)_24px] xl:gap-3">
      <div
        aria-hidden="true"
        className="relative h-[84px] overflow-visible  rounded-lg bg-cover bg-center sm:col-span-2 xl:col-span-1 xl:h-[58px]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0) 48%, rgba(255,255,255,0.1) 76%, rgba(255,255,255,0.55) 100%), url(${entityBanner})`,
        }}
      >
        <span className="absolute right-2 top-1/2 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-blue-950 text-white shadow-sm xl:-right-5">
          <Building2 aria-hidden="true" className="h-6 w-6" strokeWidth={2.2} />
        </span>
      </div>

      <div className="min-w-0 sm:col-span-2 xl:col-span-1 xl:pl-3">
        <h2 className="flex min-w-0 items-center justify-center gap-1 text-[13px] font-bold leading-tight text-blue-950 sm:text-sm xl:justify-start">
          <span>{data.title}</span>
          <ChevronRight
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-blue-950"
            strokeWidth={2.5}
          />
        </h2>
      </div>

      <div className="min-w-0 text-center sm:col-span-2 xl:col-span-1 xl:text-right">
        <p className="text-[13px] leading-tight text-slate-700 sm:text-sm">
          <strong className="text-blue-950">{data.percent}%</strong>{" "}
          <span className="font-semibold">Completed</span>
        </p>
        <p className="mt-0.5 text-[10px] leading-tight text-slate-600 sm:text-[11px]">
          {formatNumber(data.completed)} of {formatNumber(data.totalTasks)} tasks
          completed
        </p>
      </div>

      <div className="flex items-center gap-2 sm:col-span-2 xl:col-span-1">
        <div
          className="h-3 flex-1 overflow-hidden rounded-full bg-slate-200/80"
          role="img"
          aria-label={`${data.percent}% completed`}
        >
          <span
            className="block h-full min-w-[12px] rounded-full bg-emerald-700"
            style={{ width: `${data.percent}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1.5 sm:col-span-2 sm:gap-2 xl:col-span-1">
        {statusItems.map(({ key, label, Icon, style, iconStyle }) => (
          <div
            key={key}
            className={`flex min-h-[44px] min-w-0 flex-col items-center justify-center rounded-md px-0.5 py-1 ${style}`}
          >
            <Icon
              aria-hidden="true"
              className={`mb-0.5 h-[14px] w-[14px] ${iconStyle}`}
              strokeWidth={2.7}
            />
            <span className="text-[11px] font-bold leading-tight sm:text-xs">
              {formatNumber(data.stats[key])}
            </span>
            <span className="mt-0.5 text-center text-[8px] font-medium leading-tight sm:text-[9px]">
              {label}
            </span>
          </div>
        ))}
      </div>

      <span aria-hidden="true" className="hidden h-8 w-6 items-center justify-center text-blue-950 xl:flex">
        <ChevronRight aria-hidden="true" className="h-5 w-5" strokeWidth={2.5} />
      </span>
    </div>
  </section>
);

export default SubsidiariesAndAffiliateEntities;