import { CalendarDays } from "lucide-react";
import chiefExecutiveOfficer from "../../data/chief-executive-officer.json";
import bannerImage from "../../assets/banner/banner-two.png";

const { banner } = chiefExecutiveOfficer;

const Banner: React.FC = () => (
  <section
    aria-label={banner.title}
    className="relative isolate min-h-[220px] overflow-hidden bg-blue-950 shadow-sm sm:min-h-[190px] xl:aspect-[10.8/1] xl:min-h-0"
  >
    <img
      src={bannerImage}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    <div className="relative z-10 flex min-h-[220px] flex-col items-start justify-center px-4 py-5 sm:min-h-[190px] sm:px-8 xl:absolute xl:inset-y-0 xl:left-[3%] xl:min-h-0 xl:w-[52%] xl:px-0 xl:py-0">
      <h1 className="text-balance text-2xl font-bold leading-tight tracking-[-0.025em] text-blue-950 sm:text-3xl xl:text-4xl">
        {banner.title}
      </h1>
      <p className="mt-1 text-lg font-semibold leading-tight text-blue-950 sm:text-xl xl:text-2xl">
        {banner.subtitle}
      </p>

      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-700 sm:text-sm xl:text-[13px]">
        <CalendarDays className="h-4 w-4 shrink-0 text-blue-900" aria-hidden="true" />
        <span>{banner.summary}</span>
        <span aria-hidden="true" className="text-slate-500">·</span>
        <span>as of {banner.asOfDate}</span>
      </div>
    </div>

    <div className="relative z-10 mb-4 ml-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-blue-950 shadow-sm sm:ml-8 xl:absolute xl:right-[3%] xl:top-[14%] xl:mb-0 xl:ml-0">
      <CalendarDays className="h-4 w-4 shrink-0 text-blue-900" aria-hidden="true" />
      <span>{banner.asOfDate}</span>
    </div>
  </section>
);

export default Banner;
