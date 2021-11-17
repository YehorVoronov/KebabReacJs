import style from "./Error.module.css"
let Error=()=>{
    return(
        <div className={style.background}>
            <div className={style.error}>
                ERROR 404
            </div>
        </div>
    )
}

export default Error