import style from "./Produkt.module.css"
import produkt from "./../../img/5223967-doner-kebab-on-a-white-background-.jpg"

let Produkt=(props)=>{
    return(
        <div className={style.allProduct}>
            <div>
                <div>
                    <h5>Name: {props.productName}</h5>
                </div>
                <hr/>
                <img src={produkt} alt="not found img"/>
                <hr/>
                <div className={style.productDescription}>
                    <div>Cost: {props.productCost}</div>
                    <div>Desc: {props.productDescription}</div>
                    <div>ilość:{props.numberOfProducts}</div>
                </div>

                <div className={style.mathButton}>
                    <button onClick={()=>{props.addNumberOfProductsActionCreator(props.id)}}>+</button>
                    <div style={style.subtractBtn}><button onClick={()=>{props.subtractNumberOfProductsActionCreator(props.id)}}>-</button></div>
                </div>
            </div>
            <div>
                {props.isBought?<button onClick={()=>{props.noAddToBoughtTrue(props.id)}}> wyjąć z kosza!</button>:
                    <button onClick={()=>{props.addToBoughtTrue(props.id)}}> dodac do kosza!</button>}
            </div>
        </div>
    )
}

export default Produkt;