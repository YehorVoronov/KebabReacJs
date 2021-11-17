const ADD_PRODUCT="ADD-PRODUCT";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";
const ADD_PRODUCT_TO_BOUGHT_TRUE="ADD-PRODUCT-TO-BOUGHT-TRUE"
const NO_ADD_PRODUCT_TO_BOUGHT_TRUE="NO-ADD-PRODUCT-TO-BOUGHT-TRUE"
const ADD_NUMBER_OF_PRODUCTS="ADD-NUMBER-OF-PRODUCTS"
const SUBTRACT_NUMBER_OF_PRODUCTS="SUBTRACT-NUMBER-OF-PRODUCTS"
/*import kebab from "./../img/kebab.jfif"
import boorger from "./../img/boorger.jfif"
import burito from "./../img/burito.jfif"
import giros from "./../img/giros.jfif"
import hotDog from "./../img/hotDog.jfif"*/

let initialState={
        productsAbout:[
            {id:1,numberOfProducts:0,isBought:false,productName:"Kebab XL", productCost:20 ,productDescription:" some product description ",img:""},
            {id:2,numberOfProducts:0,isBought:false,productName:"Kebab L", productCost:15 ,productDescription:" some product description",img:""},
            {id:3,numberOfProducts:0,isBought:false,productName:"Giros XL", productCost:20 ,productDescription:" some product description",img:""},
            {id:4,numberOfProducts:0,isBought:false,productName:"Giros L", productCost:15 ,productDescription:" some product description",img:""},
            {id:5,numberOfProducts:0,isBought:false,productName:"Boorger XL", productCost:20 ,productDescription:" some product description",img:""},
            {id:6,numberOfProducts:0,isBought:false,productName:"Boorger L", productCost:22 ,productDescription:" some product description",img:""},
            {id:7,numberOfProducts:0,isBought:false,productName:"Hot-Dog XL", productCost:26 ,productDescription:" some product description",img:""},
            {id:8,numberOfProducts:0,isBought:false,productName:"Hot-Dog L", productCost:25 ,productDescription:" some product description",img:""},
            {id:9,numberOfProducts:0,isBought:false,productName:"Burito", productCost:20 ,productDescription:" some product description",img:""}
        ],
        newProductText:"fixed",
}

const menuReducer=(state=initialState,action)=>{
    ///зарефакторить как в comments-reducer
    switch (action.type){
        case ADD_PRODUCT:{
            let newProduct={
                id:5,
                productName:"szava 6",
                productCost:12,
                numberOfProducts:0,
                isBought:false,
                productDescription:state.newProductText

            }
           // let stateCopy={...state,productsAbout:[...state.productsAbout}]
            let stateCopy={...state}
           // stateCopy.productsAbout=[...state.productsAbout]
            stateCopy.productsAbout.push(newProduct);
            stateCopy.newProductText="";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy={...state}
            stateCopy.newProductText=action.newText;
            return stateCopy;
        }
        case ADD_PRODUCT_TO_BOUGHT_TRUE:{
            return {...state, productsAbout:state.productsAbout.map(u=>{
             if(u.id===action.userId){
                 return {...u,isBought:true}
             }
                return   u
            })
            }
        }
        case NO_ADD_PRODUCT_TO_BOUGHT_TRUE:{
            return {...state, productsAbout:state.productsAbout.map(u=>{
                    if(u.id===action.userId){
                        return {...u,isBought:false}
                    }
                    return   u
                })
            }
        }

        case ADD_NUMBER_OF_PRODUCTS:{
            return {
                ...state,productsAbout:state.productsAbout.map(u=>{
                    if (u.id===action.userId){
                        //may be error
                        return {...u,numberOfProducts: u.numberOfProducts+1 }
                    }
                    return u
                })
            }
        }
        case SUBTRACT_NUMBER_OF_PRODUCTS:{
            return {
                ...state,productsAbout:state.productsAbout.map(u=>{
                    if (u.id===action.userId){
                        //may be error also
                        if(u.numberOfProducts<1){
                            return {...u,numberOfProducts: u.numberOfProducts}
                        }else{
                            return {...u,numberOfProducts: u.numberOfProducts-1 }
                        }
                    }
                    return u
                })
            }
        }
        default:
            return state;
    }
}
export const addProductActionCreator=()=>{
    return({
        type:ADD_PRODUCT
    })
}
export const addToBoughtTrue=(userId)=>{
    return({
        type:ADD_PRODUCT_TO_BOUGHT_TRUE,
        userId:userId
    })
}
export const noAddToBoughtTrue=(userId)=>{
    return({
        type:NO_ADD_PRODUCT_TO_BOUGHT_TRUE,
        userId:userId
    })
}
export const  updateNewPostTextActionCreator=(text)=>{
    return({
        type:UPDATE_NEW_POST_TEXT,
        newText:text
    })
}
export const  addNumberOfProductsActionCreator=(userId)=>{
    return({
        type:ADD_NUMBER_OF_PRODUCTS,
        userId:userId
    })
}
export const  subtractNumberOfProductsActionCreator=(userId)=>{
    return({
        type:SUBTRACT_NUMBER_OF_PRODUCTS,
        userId:userId
    })
}



export default menuReducer;