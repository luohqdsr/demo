import React, {Component} from  'react';
import {Button,Form,Row ,Col } from 'antd'
import {connect} from 'react-redux'


class LeafStateTab extends Component{
    state = {
        currentKey: ''
    }
    rendeParametersMenu = (selectParameters, plantDataPath) => {
        if( selectParameters ){
            return selectParameters.forEach((item,index) =>{
    
                if (plantDataPath.has(item) ){
                    const parameter = plantDataPath.gte(item);
                    return(
                        <Col span="12">
                        <Form.Item  name="remember" >
                        <Button>item</Button>
                            {plantDataPath.get(item) }
                        </Form.Item>
                        </Col>      
                    )
                  
                }else{
                    console.log('无此参数')
                }
    
            })
        }else{
            console.log('无此参数')

        }
       
      }
    
    render(){
        const tailLayout = {
            wrapperCol: { span: 24 },
            
          };
         
        return(
            <div>
                <Form>
                    
                    <Row gutter={8}>
                        {this.rendeParametersMenu(this.props.selectParameters,this,this.props.plantDataPath)} 
                    </Row>
                </Form>


            </div>
        )
    }  
}

const mapState = (state) => ({
    selectParameters: state.getIn(['selectParameters:', 'plantTargetKeys']),
    plantDataPath: state.getIn(['model', 'plantDataPath'] )
})
const  mapDispatch = (dispatch) => ({

})
export default connect(mapState, mapDispatch)(LeafStateTab);