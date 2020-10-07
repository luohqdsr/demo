import React, {Component} from  'react';
import PlantStateTab from './plant-State/plantStateTab.js';
import LeafStateTab from './plant-State/leafStateTab.js';
import './index.less'
import { Tabs, Radio} from 'antd';
import {Button,Form,Row ,Col } from 'antd'

class ParametersText extends Component{
    // constructor(props) {
 
    //     super(props);
         
    //     this.state = {searchStr: ''};
         
    //     this.handleChange = this.handleChange.bind(this);
         
    //     }
    constructor(props) {
        super(props)
        this.state={
            mode:'LeafStateTab'
            
        }
        // this.handleChange = this.handleChange.bind(this);
    }
    handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
      };

    callback(val) {
        this.setState( {  numMo: val })
    }
    
    render(){
        const { TabPane } = Tabs;
        return(
            <div className="parameters-texts">
                <Radio.Group
                className="parameters-class-group"
                onChange={this.handleModeChange} value={this.state.mode} centered="true">
                    <Radio.Button value="LeafStateTab">單葉</Radio.Button>
                    <Radio.Button value="PlantStateTab">整株</Radio.Button>
                </Radio.Group> 
               

                 <Tabs
                    className="tab-content"
                    
                   
                    defaultActiveKey={PlantStateTab} 
                    tabPosition={this.state.mode}
                    activeKey={this.state.mode}
                    onChange={this.callback.bind(this)}
                    
                 >
                    <TabPane  key="LeafStateTab">
                        <Row  className="parameters-nametime">
                            <Col span="12">
                                <Form.Item label="名称">
                                    1T001
                                </Form.Item>
                            </Col>
                            <Col span="12">
                                <Form.Item label="名日期">
                                    1T001
                                </Form.Item>
                            </Col>
                        </Row>
                        <div  className="parameters-texts-tab">
                            <LeafStateTab />

                        </div>

                       
                    
                    </TabPane>

                    <TabPane  key="PlantStateTab">
                        <Row  className="parameters-nametime">
                            <Col span="12">
                                <Form.Item label="名称">
                                    1T001
                                </Form.Item>
                            </Col>
                            <Col span="12">
                                <Form.Item label="名日期">
                                    1T001
                                </Form.Item>
                            </Col>
                        </Row>
                        <div  className="parameters-texts-tab">
                        <PlantStateTab />
                    

                        </div>

                       
                    
                    </TabPane>
             

                </Tabs>



                

                
            </div>
        )
    }
}

export default ParametersText;

