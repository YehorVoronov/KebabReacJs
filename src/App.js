import './App.css';
import Bodu from "./Body/Bodu";
import { Route,Switch} from 'react-router-dom'
import Error from "./Error/Error";
import MenuContainer from "./Menu/MenuContainer";
import CommentsContainer from "./Comments/CommentsContainer";

import BasketContainer from "./Basket/BasketContainer";

function App(props) {
    return (
    <div className="App">
        {/*<div className="header">
            <Header/>
            <Networks/>
        </div>*/}
     <div>
         <Switch>
         <Route exact path="/body" render={()=><Bodu/>}/>
         <Route exact path="/comments" render={()=><CommentsContainer store={props.store}/>}/>
         <Route path="/menu" render={()=><MenuContainer store={props.store} />}/>
         <Route path="/kosz" render={()=><BasketContainer store={props.store} />}/>
         <Route path="/" render={()=><Error/>}/>
         </Switch>
     </div>
     <div>
         {/*<Footer/>*/}
     </div>
    </div>
  );
}





export default App;
