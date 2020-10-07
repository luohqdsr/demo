

import React,{Component} from 'react';
import {Transfer, Switch } from 'antd';
import {connect} from 'react-redux'
// import jsonData from "./lang/locale_zh.json";
import axios from 'axios';
import { actionCreators } from './store';
import './index.less'
class ChooseIdBox extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            targetKeys :this.props.plantTargetKeys
        }
    }
   
    componentWillMount(){
        this.props.renderButton("Plant")
        this.handleChange()
    }
    handleChange = targetKeys => {
        this.props.handlePlantChange(targetKeys)
        console.log(targetKeys)
        console.log(this.props.plantTargetKeys)

        this.setState({ targetKeys });
        console.log(this.state.targetKeys)
      };
    filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;
    render() {
        const mockData = this.props.plantButtonList
        return(

            <div className='parameters-id-transfer'>
                <div className= 'transfer-box'>
                <Transfer
                className="asd"
                titles={['Source', 'Target']}
                dataSource={mockData}
                showSearch
                targetKeys={this.state.targetKeys}
                //targetKeys={this.props.plantTargetKeys}

                
                filterOption={this.filterOption}          
                onChange={this.handleChange}//改变
                render={item => item.title}
            
                />
                </div>
                </div>
        )
    }
}

const mapState =  (state ) => ({

    plantButtonList: state.getIn(['button','plantButtonList']),
    leafButtonList: state.getIn(['button', 'leafButtonList']),
    plantTargetKeys: state.getIn(['button', 'plantTargetKeys']),
    leafTargetKeys: state.getIn(['button', 'leafTargetKeys'])

})
const  mapDispatch = (dispatch) => ({
    renderButton(category) {
        dispatch(actionCreators.renderMenu(category))
    },
    handlePlantChange(targetKeys) {
        dispatch(actionCreators.handlePlantButtonChange(targetKeys))
    }
})

export default connect(mapState, mapDispatch)(ChooseIdBox)