import Card from '../../../../components/Card/Card'
import { GiLoveHowl } from 'react-icons/gi';  
import { MdOutlineFireTruck } from 'react-icons/md';  
import './CardContainer.css'

const CardContainer = () => {
  return (
    <>
    <div>
    <h1 className='card-heading'>Area of Expertise</h1>
      <div className="card-container">
      
    <Card title="Fmcg" iconName={GiLoveHowl} />
    <Card title="Logistics" iconName={MdOutlineFireTruck} />
    <Card title="Infrastructure" iconName={GiLoveHowl} />
    <Card title="Telecom" iconName={GiLoveHowl} />
    <Card title="Retail" iconName={GiLoveHowl} />
    <Card title="E-Commerce" iconName={GiLoveHowl} />
    <Card title="Banking & Finance" iconName={GiLoveHowl} />
    <Card title="Agriculture" iconName={GiLoveHowl} />
    <Card title="Insurance" iconName={GiLoveHowl} />
    <Card title="Engineering" iconName={GiLoveHowl} />
    <Card title="Information Technology" iconName={GiLoveHowl} />
    <Card title="Electrical & Electronics" iconName={GiLoveHowl} />
    <Card title="Agro Chemicals" iconName={GiLoveHowl} />
    <Card title="Manufacturing" iconName={GiLoveHowl} />
   

    </div>
    </div>
    </>
  )
}

export default CardContainer

