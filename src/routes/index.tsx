import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChiefExecutiveOfficer, HajjGroupsProject } from '../pages';

const WebRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hajj-groups-project" element={<HajjGroupsProject />} />
        <Route path="/chief-executive-officer" element={<ChiefExecutiveOfficer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default WebRoutes;