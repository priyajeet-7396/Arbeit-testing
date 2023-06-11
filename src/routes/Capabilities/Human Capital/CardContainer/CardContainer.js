import Card from '../../../../components/Card/Card'
// import { GiLoveHowl } from 'react-icons/gi';  
import { MdOutlineFireTruck } from 'react-icons/md';  
import { FaBroadcastTower} from 'react-icons/fa';  
import { BiStore} from 'react-icons/bi'; 
import { AiOutlineShoppingCart} from 'react-icons/ai';  
import { BsBank} from 'react-icons/bs';   
import { GiWheat} from 'react-icons/gi'; 
import { MdEngineering} from 'react-icons/md'; 
import { BiChip} from 'react-icons/bi';
import { GiFirstAidKit} from 'react-icons/gi'; 
import { BiCodeAlt} from 'react-icons/bi'; 
import {LuConstruction} from 'react-icons/lu'; 
import {GiFertilizerBag} from 'react-icons/gi'; 
import {GiChipsBag} from 'react-icons/gi'; 
import {BsBuildingsFill} from 'react-icons/bs'; 
import './CardContainer.css'

const CardContainer = () => {
  return (
    <>
    <div>
    <h1 className='card-heading'>Area of Expertise</h1>
      <div className="card-container">
      
    <Card title="Fmcg" iconName={GiChipsBag} />
    <Card title="Logistics" iconName={MdOutlineFireTruck} />
    <Card title="Infrastructure" iconName={BsBuildingsFill} />
    <Card title="Telecom" iconName={FaBroadcastTower} />
    <Card title="Retail" iconName={BiStore} />
    <Card title="E-Commerce" iconName={AiOutlineShoppingCart} />
    <Card title="Banking & Finance" iconName={BsBank} />
    <Card title="Agriculture" iconName={GiWheat} />
    <Card title="Insurance" iconName={GiFirstAidKit} />
    <Card title="Engineering" iconName={MdEngineering} />
    <Card title="Information Technology" iconName={BiCodeAlt} />
    <Card title="Electrical & Electronics" iconName={BiChip} />
    <Card title="Agro Chemicals" iconName={GiFertilizerBag} />
    <Card title="Manufacturing" iconName={LuConstruction} />
   

    </div>
    </div>
    </>
  )
}

export default CardContainer

