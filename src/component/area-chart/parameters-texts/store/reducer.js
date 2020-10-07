import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState =fromJS({
    plantParametersPath ='',
    leafParametersPath ='',

})

export default( state=defaultStatus, action) => {
    switch(action.type) {
        // case constants.PLANT_DATA_PATH:
        //     return state.merge({
        //         plantParametersPath: action.plantParametersPath
        //     })
        // case constants.LEAF_DATA_PATH:
        //     return state.merge({
        //         leafParametersPath: action.leafParametersPath
        //     }).
        default:
            return state;

    }
}