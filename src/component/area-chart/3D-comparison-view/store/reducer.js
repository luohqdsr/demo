//储存空间
import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    leafIndex: 0,//叶片索引默认0
    plantIndex: 0,
    leafList:[],
    leafCount:0,
    plantDataPath:'/1T001/100/Parameters/100__2019_04_16__05_06_42__Parameters.json',
    
    showLeafIndex: false,



})
export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_PLANT_CONTENT:
            return state.set('login',action.value)
        default:
            return state;
        
    }

}