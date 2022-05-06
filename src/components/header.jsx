import React from 'react'
import {connect} from 'react-redux'

function Header(props) {
  return (
    <div className="header">
        <div className="header__container">
        <span className="material-symbols-outlined">star</span>
           <h3>{props.initial_reducer.gold}</h3>
        </div>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    initial_reducer: state.initial_reducer
  }
}

export default connect(mapStateToProps)(Header)