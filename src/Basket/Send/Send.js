import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import style from "./Send.module.css"

export const ContactUs = (props) => {
    let productsMapSend=props.props.menuPage.productsAbout.map(el=>el.isBought?<div>{el.id} {el.id} {el.isBought} {el.productName}
        {el.productCost}
        {el.productDescription} {props.props.noAddToBoughtTrue}</div>:<div> lol</div>)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ll17d2g', 'template_8iglgvt', form.current, 'user_5SmrJnf2BPZpUyHrxWHKQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (<div className={style.allSend}>
            <div><h1>wpisz swoje dane </h1></div>
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <label> Name : </label>
                <input type="text" name="user_name" />
            </div>
            <div><label> SurName : </label>
                <input type="text" name="user_surname" /></div>
            <div><label> Email : </label>
                <input type="email" name="user_email" /></div>
            <div><label> Telefon : </label>
                <input type="tel" name="user_number" /></div>
            <div><label>user_komentarz : </label>
                <input type="text" name="user_komentarz" /></div>

                <textarea name="message" value={props.allSendOrder()} />
            <div className={style.sendBtn}>
                <input type="submit" value="Send" />
            </div>
        </form>
        </div>
    );
};