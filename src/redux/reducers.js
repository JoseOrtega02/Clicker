
import {DOWN_HP,UP_GOLD,UP_DMG,UP_GLD}  from "./types.js";

const default_initial_state = {
    hp: 100,
    gold: 0
}

 export const initial_reducer = (state = default_initial_state,action) =>{
    switch(action.type) {
        case DOWN_HP: {
            return{
                ...state,
                hp: state.hp - action.payload
            }
            
        }
        case UP_GOLD: {
            return{
                ...state,
                gold: state.gold + action.payload
            }
            
        }
        default: return state;
    }
}

const default_stats_state = {
    dmg: 1,
    gld: 1
}

 export const stats_reducer = (state = default_stats_state,action) =>{
    switch(action.type) {
        case UP_DMG: {
            return{
                ...state,
                dmg: state.dmg + action.payload
            }
            
        }
        case UP_GLD: {
            return{
                ...state,
                gld: state.gld + action.payload
            }
            
        }
        default: return state;
    }
}

