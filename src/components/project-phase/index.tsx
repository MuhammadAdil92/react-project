import {
  BedDouble,
  CalendarDays,
  FileCheck2,
  Handshake,
  Landmark,
  Luggage,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import hajjGroupsProject from "../../data/hajj-groups-project.json";
import phaseImage1 from "../../assets/banner/hajj-groups-banner-1.png";
import phaseImage2 from "../../assets/banner/hajj-groups-banner-2.png";
import phaseImage3 from "../../assets/banner/hajj-groups-banner-3.png";
import phaseImage4 from "../../assets/banner/hajj-groups-banner-4.png";
import phaseImage5 from "../../assets/banner/hajj-groups-banner-5.png";
import phaseImage6 from "../../assets/banner/hajj-groups-banner-7.png";
import phaseImage7 from "../../assets/banner/hajj-groups-banner-8.png";


type PhaseIconName =
  | "building"
  | "people"
  | "transport"
  | "accommodation"
  | "permits"
  | "contracts"
  | "planning";

interface ProjectPhaseItem {
  id: string;
  name: string;
  percent: number;
  completedTasks: number;
  totalTasks: number;
  icon: PhaseIconName;
}

interface ProjectPhasesData {
  title: string;
  overallProgress: number;
  phases: ProjectPhaseItem[];
}

const phaseIcons: Record<PhaseIconName, LucideIcon> = {
  building: Landmark,
  people: UsersRound,
  transport: Luggage,
  accommodation: BedDouble,
  permits: FileCheck2,
  contracts: Handshake,
  planning: CalendarDays,
};

const projectPhases = (hajjGroupsProject as { projectPhases: ProjectPhasesData })
  .projectPhases;
const phaseImages = [
  phaseImage1,
  phaseImage2,
  phaseImage3,
  phaseImage4,
  phaseImage5,
  phaseImage6,
  phaseImage7,
];

const ProjectPhase: React.FC = () => {
  return (
    <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-2 shadow-sm xl:min-h-[140px]">
      <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
        <h2 className="flex items-center gap-1.5 text-sm font-bold text-blue-950">
          <Landmark className="h-5 w-5 text-blue-950" strokeWidth={2.4} />
          {projectPhases.title}
        </h2>
        <div className="text-[13px] font-bold text-blue-950">
          <span>Overall Progress</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 xl:gap-x-2">
        {projectPhases.phases.map((phase, index) => {
          const Icon = phaseIcons[phase.icon];
          const phaseImage = phaseImages[index % phaseImages.length];

          return (
            <article
              key={phase.id}
              className={`relative min-w-0 px-1 ${
                index < projectPhases.phases.length - 1
                  ? "xl:before:absolute xl:before:right-[-8px] xl:before:top-[22px] xl:before:z-0 xl:before:h-px xl:before:w-2 xl:before:bg-slate-300 xl:before:content-[''] xl:after:absolute xl:after:bottom-0 xl:after:right-[-5px] xl:after:h-6 xl:after:w-px xl:after:bg-teal-700/70 xl:after:content-['']"
                  : ""
              }`}
            >
              <div
                className="relative mb-1 mt-2 h-[100px] rounded-md bg-cover"
                style={{
                  backgroundImage: `url(${phaseImage})`,
                  backgroundPosition: "center 68%",
                }}
                role="img"
                aria-label={`${phase.name} image`}
              >
                <div
                  className="absolute -left-1 -top-[9px] z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white p-[3px] shadow-md"
                  aria-label={`${phase.percent}% complete`}
                >
                  <div
                    className="relative flex h-full w-full items-center justify-center rounded-full border-4 border-gray-200"
                  >
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-[11px] font-bold text-blue-950">
                      {phase.percent}%
                    </span>
                    <span className="absolute left-1/2 top-[-5px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-emerald-700" />
                  </div>
                </div>

                <span className="absolute right-2 -top-[8px] z-10 flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-white bg-blue-800 text-white shadow-sm">
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </div>

              {index < projectPhases.phases.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-8px] top-[19px] z-10 hidden h-1.5 w-1.5 rounded-full bg-amber-400 shadow-sm xl:block"
                />
              )}

              <h3 className="text-center text-[11px] font-bold leading-tight text-blue-950 sm:text-xs">
                {phase.name}
              </h3>
              <p className="mt-0.5 text-center text-[9px] leading-tight text-slate-600 sm:text-[10px]">
                {phase.completedTasks} of {phase.totalTasks} tasks completed
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectPhase;
