import commentsReducer from "./comments-reducer";
import menuReducer from "./menu-reducer";

let store={
    _state:{
        menuPage:{
            productsAbout:[
                {id:1,numberOfProducts:0,isBought:false,productName:"Kebab XL", productCost:20 ,productDescription:" productcie1",img:""},
                {id:2,numberOfProducts:0,isBought:false,productName:"Kebab L", productCost:15 ,productDescription:" productcie2",img:""},
                {id:3,numberOfProducts:0,isBought:false,productName:"Giros XL", productCost:20 ,productDescription:" productcie3",img:""},
                {id:4,numberOfProducts:0,isBought:false,productName:"Giros L", productCost:15 ,productDescription:" productcie4",img:""},
                {id:5,numberOfProducts:0,isBought:false,productName:"Boorger XL", productCost:15 ,productDescription:" productcie4",img:""},
                {id:6,numberOfProducts:0,isBought:false,productName:"Boorger L", productCost:15 ,productDescription:" productcie4",img:""},
                {id:7,numberOfProducts:0,isBought:false,productName:"Hot-Dog XL", productCost:15 ,productDescription:" productcie4",img:""},
                {id:8,numberOfProducts:0,isBought:false,productName:"Hot-Dog L", productCost:15 ,productDescription:" productcie4",img:""},
                {id:9,numberOfProducts:0,isBought:false,productName:"Burito", productCost:15 ,productDescription:" productcie4",img:""}
            ],
            newProductText:"fixed",
        },
        commentsPage:{
            clients:[
                {id:1,name:"Tom"},
                {id:2,name:"Rick"},
                {id:3,name:"Don"},
                {id:4,name:"Kris"},
            ],
            comments:[
                {id:1,comment:"very nice"},
                {id:2,comment:"Good!!"},
                {id:3,comment:"it is very nice"},
            ],
            newCommentsText:""
        }
    },
    _callSubscriber(){
        console.log("state  changed")
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber=observer;//патерн наблюдатель
    },

    /*addProduct(){
        let newProduct={
            id:5,
            productName:"szava 6",
            productCost:12,
            productDescription:this._state.menuPage.newProductText

        }
        this._state.menuPage.productsAbout.push(newProduct);
        this._state.menuPage.newProductText="";
        this._callSubscriber(this._state);
    },*/
    /*updateNewProductText(newText){
        this._state.menuPage.newProductText=newText;
        this._callSubscriber(this._state);
    },*/

    dispatch(action){
        this._state.commentsPage=commentsReducer(this._state.commentsPage,action);
        this._state.menuPage=menuReducer(this._state.menuPage,action);

        this._callSubscriber(this._state);
    }

}




export default store;