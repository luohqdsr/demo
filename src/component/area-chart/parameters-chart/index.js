import React ,{Component} from 'react';

import eachartTheme from './echartTheme'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import ReactEcharts from 'echarts-for-react';

import './index.less'
class ParametersChart extends Component{
    componentWillMount(){
        echarts.registerTheme('Imooc',eachartTheme) //主题
    }
    getOption =()=>{
        let option ={
            title:{
                text:'參數趨勢圖'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }]
            
            
        }
        return option;

    }
    render(){
        return(
            <div className="wrap-Echarts-block">
                
                <div className="Echarts-block">
                    
                        <ReactEcharts option={this.getOption()} theme="Imooc"  style={{height: '100%'}}/>


                </div>

                    

                
            </div>
        )
    }
}

export  default ParametersChart;