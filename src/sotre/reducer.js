import { combineReducers } from 'redux-immutable';

import { reducer as threeDComparisonVieReducer } from '../component/area-chart/3D-comparison-view/store/index'
import { reducer as renderParameterButton } from '../component/area-chart/select-parameter/store/index.js'

const reducer = combineReducers({
    model:threeDComparisonVieReducer,
    button: renderParameterButton
});
export default reducer;