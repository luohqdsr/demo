import axios from 'axios'
import * as constants from './constants'

const changePlantButton  =(plantButtonList,category) =>({ 
    type: constants.RENDER_PLANT_BUTTON,
    plantButtonList
})
const changeLeafButton  =(leafButtonList,category) =>({
    type: constants.RENDER_LEAF_BUTTON,
    leafButtonList 
})
const handlePlantButton = (plantTargetKeys)=>({
    type: constants.HANDLE_CHANGE_PLANT_TARGET,
    plantTargetKeys


})
export const renderMenu =(category)=>{
    return (dispatch) => {

        axios.get('/lang/loacale.json').then((Response)=>{

                const data = Response.data
                const categoryPlant = "Plant"

                const menuTreeNode = selectCategory(data, category)

                if( category== categoryPlant){
                    dispatch(changePlantButton(menuTreeNode,category))

                }else{
                    dispatch( changeLeafButton(menuTreeNode,category))
                }
                
        }).catch(e => (console.log(e)))

    }

}


export const handlePlantButtonChange = (targetKeys) =>{
    return (dispatch) => {
        dispatch(handlePlantButton(targetKeys))

    }

}

const selectCategory = (data, category )=>{
    let Menus = []
    data.forEach((item, index, array) => {
        if(item.Parameters ){

            let menuMap =(data)=>{
                return data.map((items)=>{
                    if(items.Plants ||item.Leaf){
                        if(category ="Plants"){
                            return (menuMap(items.Plants))
                        }else{
                            return (menuMap(item.Leaf))
                        }
                    }
                    return (Menus.push({'key':items.idx_Name,'title':items.C_Name, "description":items.info})
                    )
                })
            }

            menuMap(item.Parameters)
        }
      });
      console.log(Menus)
    return Menus;
}




