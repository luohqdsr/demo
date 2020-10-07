import React, {Component} from  'react'

import NavLinkBar from '../../component/area-chart/navlink/index'
import ThreeDComparison from '../../component/area-chart/3D-comparison-view/index'
import ParametersChart from '../../component/area-chart/parameters-chart'
import SelectItems from '../../component/area-chart/select-parameter/'
import ChooseIdBox from '../../component/area-chart/select-id-box/'
import ParametersText from '../../component/area-chart/parameters-texts/'

import {Row ,Col} from 'antd';
import './index.less'

class DataComparison extends Component{

    // constructor(props){
    //     super(props)
    //     //const params = new URLSearchParams(porps.location.search)
    //      console.log(props.match.params.idPath)
    //   }


    render (){
        return(
            <div className="main-page">
                {/* <div className="model-title">
                    <NavLinkBar></NavLinkBar>

                </div> */}

                
                <Row className="main">
                    <Col span={24} className ="threeD-Interface">
                        <NavLinkBar></NavLinkBar>
                        
                        <ThreeDComparison></ThreeDComparison>
                    </Col>

                    <Col span={24}  className="parameters-block">

                        <Row className="wrap-parameters-block" >
                            <Col span={17} >
                                <ParametersText></ParametersText>
                            </Col>

                            <Col span={7}>
                                <SelectItems></SelectItems>
                            </Col>
                        </Row>
                    </Col>
                    <Col  span={24} className="chart-block">
                        <Row className="wrap-chart-block">
                            <Col span={17}>
                                <ParametersChart></ParametersChart>
                            </Col>

                            <Col span={7}>
                                <ChooseIdBox></ChooseIdBox>
                            </Col>

                        </Row>

                    </Col> 
                
                </Row>

                
            </div>
            


        )
    }
}
export default DataComparison