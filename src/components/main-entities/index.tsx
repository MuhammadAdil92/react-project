

import {
  Award,
  Box,
  Building,
  Building2,
  Settings,
  Tent,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import chiefExecutiveOfficer from "../../data/chief-executive-officer.json";

interface Entity {
  id: string;
  name: string;
  percent: number;
  icon: string;
}

const entityIcons: Record<string, LucideIcon> = {
  Building,
  UsersRound,
  Settings,
  Award,
  Tent,
  Users,
  Box,
};

const ringRadius = 22;
const ringCircumference = 2 * Math.PI * ringRadius;

const MainEntities: React.FC = () => {
  const { title, description, entities } = chiefExecutiveOfficer.mainEntities as {
    title: string;
    description: string;
    entities: Entity[];
  };

  return (
    <section aria-labelledby="main-entities-title" className="w-full">
      <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 px-2">
        <div className="flex items-center gap-2">
          <Building2
            aria-hidden="true"
            className="h-6 w-6 text-blue-950 sm:h-7 sm:w-7"
            strokeWidth={2.5}
          />
          <h2
            id="main-entities-title"
            className="text-base font-bold tracking-tight text-blue-950 sm:text-lg"
          >
            {title}
          </h2>
        </div>
        <p className="text-xs text-slate-600 sm:text-[13px]">{description}</p>
      </div>

      <div className="grid grid-cols-1 gap-2 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {entities.map((entity) => {
          const Icon = entityIcons[entity.icon];
          const progress = (entity.percent / 100) * ringCircumference;

          return (
            <article
              key={entity.id}
              className="flex min-h-[76px] min-w-0 items-center gap-2 rounded-lg border border-slate-100 bg-white px-2.5 py-2 shadow-[0_2px_8px_rgba(15,23,42,0.08)] sm:gap-2.5 sm:px-3"
            >
              <div className="relative flex h-[54px] w-[54px] shrink-0 items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="-rotate-90"
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                >
                  <circle
                    cx="27"
                    cy="27"
                    r={ringRadius}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="5"
                  />
                  {entity.percent > 0 && (
                    <circle
                      cx="27"
                      cy="27"
                      r={ringRadius}
                      fill="none"
                      stroke="#047857"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray={`${progress} ${ringCircumference}`}
                    />
                  )}
                </svg>
                <span className="absolute text-[15px] font-bold leading-none text-blue-950">
                  {entity.percent}%
                </span>
              </div>

              <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                <Icon
                  aria-hidden="true"
                  className="mb-1 h-5 w-5 shrink-0 text-slate-700"
                  strokeWidth={2.5}
                />
                <h3 className="text-[13px] font-semibold leading-tight text-blue-950 sm:text-sm">
                  {entity.name}
                </h3>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MainEntities;