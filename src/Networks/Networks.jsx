import style from "./Networks.module.css"
import instagram
    from "../img/AAAKuv4Ymv66Hrztz1VTO30c7AKXMvnzRSX0yk1RCv9-p7hX9i_YP_sqixfOEV6zmEjRA7lsJQaBoFEqwF8VEk1n-k8.jpg";
import telegram from "../img/Telegram_Messenger_large_large.jpg";
import facebook from "../img/7.jpg";

let Networks=()=>{
    return(
        <div>
            <div className={style.networks}>
                <a href="https://www.instagram.com/accounts/login/"> <img src={instagram}/></a>
                <a href="https://web.telegram.org/k/"> <img src={telegram}/></a>
                <a href="https://pl-pl.facebook.com/login.php"> <img src={facebook}/></a>
                {/*<img src={instagram}/>
                <img src={telegram}/>
                <img src={facebook}/>*/}
            </div>
        </div>
    )
}
export default Networks;