import React,{Component} from 'react';
import {Card, Table}  from 'antd';
import './index.less'
class SelectItems extends Component{
    constructor() {
        super();
        this.state={
            selectedRowKeys: []
        }
    }
    // onselectChange =(selectedRowKeys)=>{
    //     console.log('selectedRowKeys changed: ', selectedRowKeys);
    //     this.setState({ selectedRowKeys });
    // }

  


    render (){
        const columns=[{
            title:'DATA-ID',
            dataIndex: 'name'
        }]
        const data =[{key:'1',name:'1TI001'},{key:'2',name:'1Too2'}];
        return(

            <div className="SelectItems-box" >
                <div className="wrap-SelectItems-box">
                    <Card >
                        <Table
                        columns={columns} dataSource={data} 
                        />


                    
                    </Card>

                </div>
                
             </div>
        )
    }
}

export default SelectItems;