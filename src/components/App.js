import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home/Home';
import Capabilities from '../routes/Capabilities/Capabilities';
import DataAnalytics from '../routes/Capabilities/Data & Analytics/Data&Analytics'
import HumanResourceManagement from '../routes/Capabilities/Human Resource Management/HumanResourceManagement'
import Transformation from '../routes/Capabilities/Transformation and Change Management/Transformation';

import Layout from './Layout';
import BusinessProcess from '../routes/Capabilities/Business Process Outsourcing/BusinessProcess';
import DigitalInnovation from '../routes/Capabilities/Digital Innovation and Adoption/DigitalInnovationan';
import TechnologyInnovation from '../routes/Capabilities/Technology Innovation and Consulting/TechnologyInnovation';
import Sustainability from '../routes/Capabilities/Sustainability (ESG)/Sustainability'
import ArtificialIntelligence from '../routes/Capabilities/Artificial Intelligence/ArtificialIntelligence'
import Industry from '../routes/Industry/Industry'
import Agriculture from '../routes/Industry/Agriculture/Agriculture'
import Finance from '../routes/Industry/Finance/Finance'
import Regulatory from '../routes/Industry/Regulatory/Regulatory'
import Insurance from '../routes/Industry/Insurance/Insurance'
import Banking from '../routes/Industry/Banking/Banking'
import FMCG from '../routes/Industry/FMCG/FMCG'
import Telecom from '../routes/Industry/Telecom/Telecom'
import Manufacturing from '../routes/Industry/Manufacturing/Manufacturing'
import Education from '../routes/Industry/Education/Education'
import OilGas from '../routes/Industry/Oil & Gas/OilGas'
import  MetalMinning from '../routes/Industry/Metal & Minning/MetalMinning'
import HealthCare from '../routes/Industry/Health Care/HealthCare'
import CapitalMarket from '../routes/Industry/Capital Market/CapitalMarket'
import Products from '../routes/Products/Products'
import FinTex from '../routes/Products/FinTex/FinTex'
import YieldSTA from '../routes/Products/YieldSTA/YieldSTA'
import Earth from '../routes/Products/Earth/Earth'
import IndustryTrend  from '../routes/Insights/IndustryTrend/IndustryTrend'
import OurThinking from '../routes/Insights/OurThinking/OurThinking'
import News from '../routes/Insights/News/News'
import WHOWEARE from '../routes/About/WHO WE ARE/WHOWEARE'
import HOWWEWORK from '../routes/About/HOW WE WORK/HOWWEWORK'
import CULTURE from '../routes/About/OUR CULTURE AND COMMITMENT/CULTURE'
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
          <Route path="BusinessProcessOutsourcing" element={<BusinessProcess/>} />
          <Route path="DigitalInnovationandAdoption" element={<DigitalInnovation/>} />
          <Route path="TechnologyInnovation" element={<TechnologyInnovation/>} />
          <Route path="sustainability" element={<Sustainability/>} />
          <Route path="artificialIntelligence" element={<ArtificialIntelligence/>} />

          {/* ==========================industry======================== */}
          <Route path="industry" element={<Industry/>} />
          <Route path="agriculture" element={<Agriculture/>} />
          <Route path="finance" element={<Finance/>} />
          <Route path="regulatory" element={<Regulatory/>} />
          <Route path="insurance" element={<Insurance/>} />
          <Route path="banking" element={<Banking/>} />
          <Route path="FMCG" element={<FMCG/>} />
          <Route path="telecom" element={<Telecom/>} />
          <Route path="manufacturing" element={<Manufacturing/>} />
          <Route path="education" element={<Education/>} />
          <Route path="Oil&Gas" element={<OilGas/>} />
          <Route path="MetalMinning" element={<MetalMinning/>} />
          <Route path="healthCare" element={<HealthCare/>} />
          <Route path="capitalMarket" element={<CapitalMarket/>} />

          {/* ======================products==================== */}
          <Route path="products" element={<Products/>} />
          <Route path="finTex" element={<FinTex/>} />
          <Route path="yieldSTA" element={<YieldSTA/>} />
          <Route path="earth" element={<Earth/>} />


          {/* ====================insights================== */}
          <Route path="industryTrend" element={<IndustryTrend/>} />
          <Route path="OurThinking" element={<OurThinking/>} />
          <Route path="news" element={<News/>} />



          {/* =================about===================== */}
          <Route path="who-we-are" element={<WHOWEARE/>} />
          <Route path="howwework" element={<HOWWEWORK/>} />
          <Route path="our-culture" element={<CULTURE/>} />


          {/* ====================Career================== */}
          <Route path="join" element={<JoinUs/>} />



          {/* ====================random============= */}
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};





export default App;


