
import * as React from "react";
import {
    addNumberOfProductsActionCreator,

    addProductActionCreator, addToBoughtTrue, noAddToBoughtTrue, subtractNumberOfProductsActionCreator,
    updateNewPostTextActionCreator
} from "../redux/menu-reducer";
import Menu from "./Menu";
import {connect} from "react-redux";


/*

let MenuContainer=(props)=>{
    let state=props.store.getState();
    let buttonOnClick=()=>{
       // props.addPost()
        props.store.dispatch(addProductActionCreator());
    }
    let onProductChange=(text)=>{
        //let text= createRef.current.value;
        props.store.dispatch(updateNewPostTextActionCreator(text));
        //props.updateNewPostTextActionCreator(text);
    }
    return(<Menu newProductText={state.menuPage.newProductText} menuPage={state.menuPage} addProductActionCreator={buttonOnClick}
                 updateNewPostTextActionCreator={onProductChange}/>)
}
*/

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
        addToBoughtTrue:(userId)=>{
          dispatch(addToBoughtTrue(userId))
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
const MenuContainer= connect(mapStateToProps,mapDispatchToProps)(Menu)

export default MenuContainer;