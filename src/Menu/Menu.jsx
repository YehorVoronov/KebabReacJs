import style from "./Menu.module.css"
import Produkt from "./Produkt/Produkt";
import * as React from "react";
import {NavLink} from "react-router-dom";
import {
    addNumberOfProductsActionCreator,
    addProductActionCreator,
    updateNewPostTextActionCreator
} from "../redux/menu-reducer";

//deleted
import {useState} from "react";

let Menu=(props)=>{
    let productsMap=props.menuPage.productsAbout.map(el=>!el.isBought?<Produkt key={el.id} id={el.id} isBought={el.isBought} productName={el.productName}
                 productCost={el.productCost}
                 productDescription={el.productDescription} addToBoughtTrue={props.addToBoughtTrue}/>:<div></div>)
// maping without search
    /*let productsMapWithoutDel=props.menuPage.productsAbout.map(el=><Produkt  subtractNumberOfProductsActionCreator={props.subtractNumberOfProductsActionCreator}
                                                                             addNumberOfProductsActionCreator={props.addNumberOfProductsActionCreator}
                                                                             numberOfProducts={el.numberOfProducts} key={el.id} id={el.id} isBought={el.isBought}
                                                                             productName={el.productName} img={el.img}
    productCost={el.productCost}
    productDescription={el.productDescription} noAddToBoughtTrue={props.noAddToBoughtTrue} addToBoughtTrue={props.addToBoughtTrue}/>)*/

    ///delllllete map with search /filter it is search
    const [searchTerm,setsearchTerm]=useState("")
    let productsMapWithoutDel=props.menuPage.productsAbout.filter(
        val=>{
            if (searchTerm===''){
                return val;
            }else if (
              val.productName.toLowerCase().includes(searchTerm.toLowerCase())||
                val.productDescription.toLowerCase().includes(searchTerm.toLowerCase())
            ){
                return val;
            }
        }
    ).map(el=><Produkt  subtractNumberOfProductsActionCreator={props.subtractNumberOfProductsActionCreator}
                                                                             addNumberOfProductsActionCreator={props.addNumberOfProductsActionCreator}
                                                                             numberOfProducts={el.numberOfProducts} key={el.id} id={el.id} isBought={el.isBought}
                                                                             productName={el.productName} img={el.img}
                                                                             productCost={el.productCost}
                                                                             productDescription={el.productDescription} noAddToBoughtTrue={props.noAddToBoughtTrue} addToBoughtTrue={props.addToBoughtTrue}/>)
    /*let productsMap=props.menuPage.productsAbout.map(el=><Produkt key={el.id} id={el.id} isBought={el.isBought} productName={el.productName}
                                                   productCost={el.productCost}
                                                   productDescription={el.productDescription} addToBoughtTrue={props.addToBoughtTrue}/>)*/
    let createRef= React.createRef();
    let buttonOnClick=()=>{
       props.addProductActionCreator()
        //props.dispatch(addProductActionCreator());
    }
    let onProductChange=()=>{
        let text= createRef.current.value;
        props.updateNewPostTextActionCreator(text);
        //props.dispatch(updateNewPostTextActionCreator(text));
    }

    return(
            <div className={style.allBody}>

                <div className={style.search}>
                    {/*search*/}
                    <input type="text" placeholder="Search products"
                           onChange={(e)=>{
                               setsearchTerm(e.target.value)
                           }}/>
                </div>

                <div className={style.downButton}>
                    <NavLink to="/kosz"><button>przejdż do kosza</button></NavLink>
                </div>
                <div className={style.productMap}>
                    {productsMapWithoutDel}
                </div>
                <div>
                    <div className={style.downButton}>
                      <NavLink to="/comments"><button>przejdż do komentów</button></NavLink>
                    </div>
                </div>
                <div className={style.commentsBtn}>
                    <div>
                        <textarea onChange={onProductChange} ref={createRef} value={props.newProductText}/>
                    </div>
                    <div>
                        <button onClick={buttonOnClick}>dodać produkt</button>
                    </div>
                </div>
            </div>
    )
}

export default Menu;