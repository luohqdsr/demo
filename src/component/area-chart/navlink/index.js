import React, {Component} from  'react';
import {Layout,  Select, Button, Row, Col  }  from 'antd';
import {CloseSquareOutlined} from '@ant-design/icons';
import './index.less'

const { Header } = Layout;
class NavLinkBar extends Component{
    render(){
        const {Option} = Select

        return(
            <div className ="navLink-box">
                <Layout>
                <Header >
                    <Row>
                        <Col   flex={3}>   
                            <Button type="primary" icon={<CloseSquareOutlined /> } ></Button>
                        </Col>
                        <Col flex={18} > 3D-MODEL</Col>
                        <Col  flex={3}>
                            <Select defaultValue="zh-CN">
                                <Option value ="zh-CN"> 中文 </Option>
                                <Option value ="en-US"> 英文 </Option>
                            </Select>
                        </Col>
                    </Row>
                </Header>
          </Layout>

            </div>
            
        )
    }
}
export default NavLinkBar;