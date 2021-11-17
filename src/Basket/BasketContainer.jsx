import * as React from "react";
import {
    addNumberOfProductsActionCreator,

    addProductActionCreator, noAddToBoughtTrue, subtractNumberOfProductsActionCreator,
    updateNewPostTextActionCreator
} from "../redux/menu-reducer";
import {connect} from "react-redux";
import Basket from "./Basket";




let mapStateToProps=(state)=>{
    return{
        menuPage: state.menuPage,
        newProductText:state.menuPage.newProductText
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewPostTextActionCreator:(text)=>{
            dispatch(updateNewPostTextActionCreator(text));
        },
        addProductActionCreator:()=>{
            dispatch(addProductActionCreator());
        },
        noAddToBoughtTrue:(userId)=>{
          dispatch(noAddToBoughtTrue(userId))
        },
        addNumberOfProductsActionCreator:(userId)=>{
            dispatch(addNumberOfProductsActionCreator(userId))
        },
        subtractNumberOfProductsActionCreator:(userId)=>{
            dispatch(subtractNumberOfProductsActionCreator(userId))
        },
    }
}
const BasketContainer= connect(mapStateToProps,mapDispatchToProps)(Basket)

export default BasketContainer;