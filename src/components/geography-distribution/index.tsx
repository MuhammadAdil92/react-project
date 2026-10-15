import {
  Building2,
  BusFront,
  Map,
  TriangleAlert,
} from "lucide-react";
import hajjGroupsProject from "../../data/hajj-groups-project.json";
import transportMap from "../../assets/transport.png";

const { geographicDistribution } = hajjGroupsProject;

const legendIcons = {
  pin: TriangleAlert,
  building: Building2,
  bus: BusFront,
  route: null,
  area: null,
} as const;

const GeographyDistribution: React.FC = () => (
  <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
    <h2 className="mb-1 flex items-center gap-1.5 text-[13px] font-bold text-blue-950">
      <Map className="h-4 w-4 fill-blue-950 text-white" strokeWidth={2.5} />
      {geographicDistribution.title}
    </h2>

    <div className="grid h-[130px] grid-cols-[minmax(92px,0.62fr)_minmax(0,1fr)] gap-0.5">
      <ul className="space-y-1.5 pt-1">
        {geographicDistribution.legend.map((item) => {
          const Icon = legendIcons[item.type as keyof typeof legendIcons];
          return (
            <li
              key={item.id}
              className="flex items-center gap-1.5 whitespace-nowrap text-[11px] text-slate-700"
            >
              {Icon ? (
                <Icon
                  className={`h-4 w-4 shrink-0 ${
                    item.type === "pin"
                      ? "fill-amber-500 text-white"
                      : "text-blue-900"
                  }`}
                  strokeWidth={2.5}
                />
              ) : item.type === "route" ? (
                <span className="h-0 w-5 shrink-0 border-t-2 border-dotted border-blue-900" />
              ) : (
                <span className="h-3 w-5 shrink-0 rounded-sm bg-blue-100" />
              )}
              {item.label}
            </li>
          );
        })}
      </ul>

      <div className="relative min-w-0 overflow-hidden">
        <img
          src={transportMap}
          alt="Transport map showing Makkah, Mina, Arafat, Muzdalifah, and Madinah"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  </section>
);

export default GeographyDistribution;
