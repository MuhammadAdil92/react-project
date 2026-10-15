import { CalendarDays } from "lucide-react";
import hajjGroupsProject from "../../data/hajj-groups-project.json";
import bannerImage from "../../assets/banner/new.png";

const banner = hajjGroupsProject.banner;

const Banner: React.FC = () => (
  <section
    aria-label={banner.title}
    className="relative isolate min-h-[220px] overflow-hidden bg-blue-950 shadow-sm sm:min-h-[190px] xl:aspect-[10.4/1] xl:min-h-0"
  >
    <img
      src={bannerImage}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover object-left xl:object-fill"
    />

    <div className="relative z-10 flex min-h-[220px] flex-col items-start justify-center px-4 py-4 sm:min-h-[190px] sm:px-6 xl:absolute xl:inset-y-0 xl:left-[3.4%] xl:min-h-0 xl:w-[42%] xl:px-0 xl:py-0">
      <h1 className="text-balance text-2xl font-bold leading-tight text-blue-950 sm:text-3xl xl:text-4xl">
        {banner.title}
      </h1>
      <p className="mt-1 text-base leading-tight text-blue-950 sm:text-lg xl:text-2xl">
        {banner.subtitle}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-blue-900 xl:mt-3 xl:gap-6 xl:text-[13px]">
        <p className="flex items-center gap-1.5 whitespace-nowrap">
          <CalendarDays className="h-4 w-4 shrink-0 text-blue-800" aria-hidden="true" />
          <span>From {banner.startDate}</span>
        </p>
        <p className="flex items-center gap-1.5 whitespace-nowrap">
          <CalendarDays className="h-4 w-4 shrink-0 text-blue-800" aria-hidden="true" />
          <span>To {banner.endDate}</span>
        </p>
      </div>
    </div>

    <p className="relative z-10 mb-4 ml-4 w-fit max-w-[calc(100%-2rem)] rounded-md bg-blue-950/85 px-2 py-1 text-left text-sm font-medium leading-tight text-white sm:ml-6 xl:absolute xl:right-[2%] xl:top-1/2 xl:mb-0 xl:ml-0 xl:max-w-[11%] xl:-translate-y-1/2 xl:rounded-none xl:bg-transparent xl:px-0 xl:py-0 xl:text-center xl:text-sm">
      {banner.tagline}
    </p>
  </section>
);

export default Banner;
