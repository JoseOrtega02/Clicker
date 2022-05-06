import {React,useState} from 'react'
import { connect } from 'react-redux'
import {down_hp_action,up_gold_action} from "../redux/actions.js"
import data from '../data/data.js'


function Enemy(props) {
  let [posicionActual,setPos] = useState(0)
  let image = data.enemyArr[posicionActual].img
  function aumenta(){
    if(posicionActual >= data.enemyArr.length -1) {
      setPos(0)
      console.log(data.enemyArr.length)
  } else{
    setPos(posicionActual + 1)
  }
  }
  return (
    <div className="enemy__container" onClick={()=>{
      props.down_hp_action(props.stats_reducer.dmg)
      props.up_gold_action(props.stats_reducer.gld)
      let enemyIMG = document.getElementById("enemyIMG")
      if(props.initial_reducer.hp <= 1){
         
        aumenta()
    
    props.down_hp_action(-(data.enemyArr[posicionActual].hp*props.stats_reducer.dmg))
    
        image = data.enemyArr[posicionActual].img
        enemyIMG.src = image
        props.up_gold_action(props.initial_reducer.hp)
      }
      
    
      
    }}>
        <div className="enemy__container-hp">
            <h4>{props.initial_reducer.hp}</h4>
        </div>
        <div className="enemy__container-img">
            <img src={image} alt="" id="enemyIMG"/>
        </div>
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
  down_hp_action,
  up_gold_action
}

export default connect(mapStateToProps,mapDispatchToProps)(Enemy)