import {React} from 'react'
import { connect } from 'react-redux'
import {up_dmg_action,up_gld_action,up_gold_action} from "../redux/actions.js"
import data from '../data/data.js'
import { v4 as uuid } from 'uuid';

function Store(props) {
  
 
  
  function upStore() {
    let shop = document.getElementById('store')
    let vh = shop.style.top
    if(vh === "0vh"){
      shop.style.top = "95vh"
      
    }else {
      shop.style.top = "0vh"
      
    }
    
    
  }

 
  return (
    <div className="store__container" id="store">
        <span className="material-symbols-outlined" onClick={()=>{
          upStore()
        }}>expand_less</span>
       {
         data.storeArr.map((item) =>{
          return <div className="store__container-obj" key={uuid()}>
          <img src={item.img} alt="" />
          <ul>
              <li>attack: +{item.statDMG}</li>
              <li>stars: +{item.statGLD}</li>
          </ul>
          <h3>{item.name}</h3>
          <button onClick={()=>{
            if(props.initial_reducer.gold >= item.price*props.stats_reducer.gld){
              props.up_dmg_action(item.statDMG)
              props.up_gld_action(item.statGLD)
              props.up_gold_action(-item.price*props.stats_reducer.gld)
              
            }
            
          }} >Buy</button>
          <div className="enemy__container-obj-price">
          <span className="material-symbols-outlined">star</span>
              <h4>{item.price*props.stats_reducer.gld}</h4>
          </div>
      </div>
         })
       }
        
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    stats_reducer: state.stats_reducer,
    initial_reducer: state.initial_reducer
  }
}

const mapDispatchToProps = {
  up_dmg_action,
  up_gld_action,
  up_gold_action
}
export default connect(mapStateToProps,mapDispatchToProps)(Store)