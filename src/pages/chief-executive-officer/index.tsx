import {
  CheifBanner,
  MainEntities,
  OverallCompletedRate,
  SubsidiariesAndAffiliateEntities,
  TravelGroups,
} from "../../components";

const ChiefExecutiveOfficer: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <CheifBanner />
      <div className="space-y-3 p-2 sm:p-3">
        <OverallCompletedRate />
        <MainEntities />
        <TravelGroups />
        <SubsidiariesAndAffiliateEntities />
      </div>
    </main>
  );
};

export default ChiefExecutiveOfficer;