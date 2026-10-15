import {
  HajjBanner,
  CompletedTask,
  ProjectPhase,
  DelayedTask,
  DepartmentReadliness,
  TravelCompanyReadliness,
  ProjectScheduleProgress,
  KeyOperationalIndicators,
  RiskAndAlert,
  GeographyDistribution,
} from "../../components";

const HajjGroupsProject: React.FC = () => {

  return (
    <main className="min-h-screen bg-slate-50">
      <HajjBanner />
      <div className="space-y-1.5 px-2 pb-2 pt-0">
        <CompletedTask />
        <ProjectPhase />
        <div className="grid grid-cols-1 items-stretch gap-2 xl:min-h-[190px] xl:grid-cols-[1.7fr_1fr_1.4fr]">
          <DelayedTask />
          <DepartmentReadliness />
          <TravelCompanyReadliness />
        </div>
        <div className="grid grid-cols-1 items-stretch gap-2 xl:grid-cols-[1.15fr_1.15fr_0.9fr_0.95fr]">
          <ProjectScheduleProgress />
          <KeyOperationalIndicators />
          <RiskAndAlert />
          <GeographyDistribution />
        </div>
      </div>
    </main>
  );
};

export default HajjGroupsProject;