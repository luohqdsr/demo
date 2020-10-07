import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    plantButtonList:[],
    leafButtonList:[],
    plantTargetKeys:[],
    leafTargetKeys:[]
})

export default (state =defaultState, action)=>{
    switch(action.type){
        case constants.RENDER_LEAF_BUTTON:
            return state.merge({
                
                leafButtonList: action.leafButtonList
            })
        case constants.RENDER_PLANT_BUTTON:
            return state.merge({
                plantButtonList: action.plantButtonList,
            })
        case constants.HANDLE_CHANGE_LEAF_TARGET:
            return state.merge({
                leafTargetKeys: action.leafTargetKeys

            })
        case constants.HANDLE_CHANGE_PLANT_TARGET:
            return state.merge({
                plantTargetKeys: action.plantTargetKeys

            })
        default:
            return state;
    }
}