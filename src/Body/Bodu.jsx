import style from "./Body.module.css"
import Header from "../Header/Header";
import Networks from "../Networks/Networks";
import {NavLink, Route} from "react-router-dom";
import GoogleMap from "../GoogleMap";



function Bodu(){
let Href=()=>{
    return(
        <div>

        </div>
    )
}
    return(<div className={style.background}>
        <div className="header">
            <Header/>
            <Networks/>
        </div>
        <div className={style.allMenu}>
           <div>
               <p>
                   Уи́льям Ге́нри Гейтс III (англ. William Henry Gates III; 28 октября 1955, Сиэтл[5],
                   Вашингтон), более

                   известный как Билл Гейтс (англ. Bill Gates)[6][7] — американский предприниматель и
                   общественный деятель,

                   филантроп, один из создателей (совместно с Полом Алленом) и бывший крупнейший
                   акционер компании Microsoft.

                   До июня 2008 года являлся руководителем компании; после ухода с поста остался в
                   должности её неисполнительного

                   председателя совета директоров. Также является сопредседателем
                   благотворительного Фонда Билла и Мелинды Гейтс,

                   членом совета директоров Berkshire Hathaway, генеральным директором Cascade
                   investment
               </p>
               <p>
                   В период с 1996 по 2007 год, с 2009 по 2016 год — самый богатый человек планеты
                   по версии журнала Forbes. На 10 ноября

                   2020 года состояние Билла Гейтса оценивается в 119,1 млрд долларов. Он занимает
                   второе место в рейтинге богатейших люде

                   й планеты[8], уступив основателю Amazon Джеффу Безосу[9].

               </p>
               <p>
                   Билл Гейтс является одним из рекордсменов по размеру средств, переданных на
                   благотворительность: в период с 1994 по

                   2010 год он вложил в Фонд Билла и Мелинды Гейтс более 28 млрд долларов[10]. В
                   2010 году Гейтс подписал «Клятву дарения» и выступил

                   с предложением ко всем миллиардерам о передаче половины своих состояний на
                   благотворительную деятельность[11].

               </p>
           </div>
            <div className={style.underBtn}>
                <NavLink to="/menu"><button >go menu </button></NavLink>
            </div>
            {/*<GoogleMap/>*/}
        </div>
    </div>)
}

export default Bodu;