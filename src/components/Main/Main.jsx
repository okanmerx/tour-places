import './Main.scss';
import {data} from '../../data/data.js'
import Card from './Card';

export default function Main() {
 

  return (
    <div className="cards-container">
  
      {data.map(city=>(<Card {...city} key={city.id}/>))}
    </div>
  )
}