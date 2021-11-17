import style from "./Basket.module.css"
import Produkt from "./../Menu/Produkt/Produkt";
import * as React from "react";
import {ContactUs} from "./Send/Send";
import {NavLink} from "react-router-dom";



let Basket=(props)=>{

    let allSumArr=[];
    let sendOrder=[];

    function allProductSum (){
        let s = 0;
        for (let i = 0; i < allSumArr.length; i++){
            s += allSumArr[i]
        }
        return s
    }
    function allSendOrder (){
        let idToString;
        let numberOfProductsToString;
        let productName
        let allSendOrderString="";
        for (let i = 0; i < allSumArr.length; i++){
            let id= sendOrder[i].id;
            idToString=id.toString();

            productName= sendOrder[i].productName;

            let numberOfProducts= sendOrder[i].numberOfProducts;
            numberOfProductsToString=numberOfProducts.toString();
            allSendOrderString+=" idToString : "+idToString+" productName : "+productName+" numberOfProductsToString :"+numberOfProductsToString+"  \n "
        }
        return allSendOrderString;
    }

    for (let i=0;i<props.menuPage.productsAbout.length;i++){
        if (props.menuPage.productsAbout[i].isBought){
            let allSum=0
            allSum+=(props.menuPage.productsAbout[i].productCost*props.menuPage.productsAbout[i].numberOfProducts)

            allSumArr.push(allSum);
        }
    }

    for (let i=0;i<props.menuPage.productsAbout.length;i++){
        if (props.menuPage.productsAbout[i].isBought){
            sendOrder.push((props.menuPage.productsAbout[i]));
        }
    }


    let productsMap=props.menuPage.productsAbout.map(el=>el.isBought?
        <div className={style.floatProduct}><Produkt subtractNumberOfProductsActionCreator={props.subtractNumberOfProductsActionCreator}
                                                     addNumberOfProductsActionCreator={props.addNumberOfProductsActionCreator} key={el.id} id={el.id}
        isBought={el.isBought} productName={el.productName} img={el.img} numberOfProducts={el.numberOfProducts} productCost={el.productCost}
                 productDescription={el.productDescription} noAddToBoughtTrue={props.noAddToBoughtTrue}/></div>
        :<div></div>)

    let allPrice=props.menuPage.productsAbout.map(el=>el.isBought? <div>
            {el.productCost*el.numberOfProducts}
    </div>
        :<div>

        </div>
    )

    /*let createRef= React.createRef();*/
   /* let buttonOnClick=()=>{
       props.addProductActionCreator()
        //props.dispatch(addProductActionCreator());
    }*/
   /* let onProductChange=()=>{
        let text= createRef.current.value;
        props.updateNewPostTextActionCreator(text);
        //props.dispatch(updateNewPostTextActionCreator(text));
    }*/
    return(<div>
            <div className={style.allBody}>
                <div className={style.downButton}>
                    <NavLink to="/menu"><button>przejdż do menu</button></NavLink>
                </div>
                <div className={style.productsMap}>
                    {productsMap}
                </div>
                <div>
                    <div className={style.order}>
                       {/* <span>allSendOrder:{allSendOrder()}</span>*/}
                        {/*<span><h1>Końcowa cena :{allPrice}</h1></span>*/}
                        <span><h1>Końcowa cena :{allProductSum()} złotych</h1></span>
                        {/*<span> allProductSum:{allProductSum()} złotych</span>*/}
                        {/*<span> {allProductSum()} złotych</span>*/}
                        {/*<h1>wpisz swoje dane ta końcowe zamówienie</h1>*/}
                        <ContactUs props={props} allSendOrder={allSendOrder} allProductSum={allProductSum}/>
                    </div>
                </div>
                {/*line for all background image*/}
                <div className={style.basketFooter}><hr/></div>
            </div>
        </div>
    )
}

export default Basket;