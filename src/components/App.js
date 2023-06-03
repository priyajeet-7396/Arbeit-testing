import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home/Home';
import Capabilities from '../routes/Capabilities/Capabilities';
import DataAnalytics from '../routes/Capabilities/Data & Analytics/Data&Analytics'
import HumanResourceManagement from '../routes/Capabilities/Human Resource Management/HumanResourceManagement'
import Transformation from '../routes/Capabilities/Transformation and Change Management/Transformation';

import Layout from './Layout';

import Industry from '../routes/Industry/Industry'
import Agriculture from '../routes/Industry/Agriculture/Agriculture'
import Finance from '../routes/Industry/Finance/Finance'

import Manufacturing from '../routes/Industry/Manufacturing/Manufacturing'

import CapitalMarket from '../routes/Industry/Capital Market/CapitalMarket'

import FinTex from '../routes/Solutions/FinTex/FinTex'
import YieldSTA from '../routes/Solutions/YieldSTA/YieldSTA'
import Earth from '../routes/Solutions/Earth/Earth'
import IndustryTrend  from '../routes/Insights/IndustryTrend/IndustryTrend'


import HOWWEWORK from '../routes/About/HOW WE WORK/HOWWEWORK'

import JoinUs from '../routes/Career/JoinUs';






const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* ============capabilities=========== */}
          <Route path="capabilities" element={<Capabilities/>} />
          <Route path="dataAnalytics" element={<DataAnalytics/>} />
          <Route path="humanResourceManagement" element={<HumanResourceManagement/>} />
          <Route path="TransformationandChangeManagement" element={<Transformation/>} />

          {/* ==========================industry======================== */}
          <Route path="industry" element={<Industry/>} />
          <Route path="agriculture" element={<Agriculture/>} />
          <Route path="finance" element={<Finance/>} />
          <Route path="manufacturing" element={<Manufacturing/>} />
          <Route path="capitalMarket" element={<CapitalMarket/>} />

          {/* ======================products==================== */}

          <Route path="finTex" element={<FinTex/>} />
          <Route path="yieldSTA" element={<YieldSTA/>} />
          <Route path="earth" element={<Earth/>} />


          {/* ====================insights================== */}
          <Route path="industryTrend" element={<IndustryTrend/>} />
      


          {/* =================about===================== */}
  
          <Route path="howwework" element={<HOWWEWORK/>} />
   


          {/* ====================Career================== */}
          <Route path="join" element={<JoinUs/>} />



          {/* ====================random============= */}
          {/* <Route path="*" element={<p>Not found!</p>} /> */}
        </Route>
      </Routes>
    </>
  );
};





export default App;


