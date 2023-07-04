import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home/Home';
import Transformation from '../routes/Capabilities/Transformation and Change Management/Transformation';
import Layout from './Layout';
import Agriculture from '../routes/Industry/Agriculture/Agriculture'
import Finance from '../routes/Industry/Finance/Finance'
import CapitalMarket from '../routes/Industry/Capital Market/CapitalMarket'
import FinTech from '../routes/Solutions/FinTech/FinTex'
import JoinUs from '../routes/Career/JoinUs';
import Infrastructure from '../routes/Industry/Infrastructure/Infrastructure';
import HumanCapital from '../routes/Capabilities/Human Capital/HumanCapital';
import Regtech from '../routes/Solutions/Regtech/Regtech';
import AboutUs from '../routes/About/AboutUs/AboutUs';
import DigitalTransformation from '../routes/Capabilities/Digital Transformation/DigitalTransformation';




const App = () => {



  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* ============capabilities=========== */}
          <Route path="digitaltransformation" element={<DigitalTransformation/>} />
          <Route path="humanResourceManagement" element={<HumanCapital/>} />
          <Route path="TransformationandChangeManagement" element={<Transformation/>} />

          {/* ==========================industry======================== */}
          <Route path="agriculture" element={<Agriculture/>} />
          <Route path="finance" element={<Finance/>} />
          <Route path="infrastructure" element={<Infrastructure/>} />
          <Route path="capitalMarket" element={<CapitalMarket/>} />

          {/* ======================products==================== */}

          <Route path="finTech" element={<FinTech/>} />
          <Route path="capitalmarket" element={<CapitalMarket/>} />
          <Route path="humancapital" element={<HumanCapital/>} />
          <Route path="regtech" element={<Regtech/>} />


          {/* ====================insights================== */}
          {/* <Route path="industryTrend" element={<Insights/>} /> */}
      


          {/* =================about===================== */}
  
          <Route path="aboutus" element={<AboutUs/>} />
   


          {/* ====================Career================== */}
          <Route path="joinus" element={<JoinUs/>} />



          {/* ====================random============= */}
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};





export default App;


