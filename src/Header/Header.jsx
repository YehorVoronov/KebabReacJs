import person from "./../../src/img/funny-chef-with-beard-cook-beard-man-and-moustache-wearing-bib-apron_293990-266.jpg"
import style from "./Header.module.css"
import { NavLink} from 'react-router-dom'

function Header(){
    return(
        <div className={style.fotoDescription}>
            <div className={style.h1}>
                <div>Jochn</div>
                <div>Prokur</div>
                {/*<div><NavLink to="/profile"> <div>Kebabów Artur Weniaminovich</div></NavLink></div>
                <div className={style.goToMenu}>
                    <NavLink to="/menu">go to menu</NavLink>
                </div>*/}
                <a href="tel:+6494461709">61709</a>
            </div>
            <div className={style.h2}>
                <img src={person}/>
            </div>
        </div>

    )
}

export default Header;