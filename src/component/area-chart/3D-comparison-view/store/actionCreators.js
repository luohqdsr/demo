//调用方法 1. 跟据路径 文件的所有叶片名称
import axios from 'axios'
import * as constants from './constants'


const changeDetail = ( plantID  )=>({
    type : constants.CHANGE_PLANT_CONTENT,
    leafIndex:plantID



})
//axios 发送路径中的参数到express 

export const getDetail = (plantID) =>{
    return (dispatch) => {
        axios.get('/plant/serialNumber',{plantID})
            .then(res=>{
            
            // if(res.data.data.code == 0) {
                const result = res.data.data;
                dispatch(changeDetail(result.plantID))
            // }
        }).catch(()=> {
            console.log('PLY数据错误')
        })
    }
}