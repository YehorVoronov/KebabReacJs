import * as React from "react";
import style from "./Comments.module.css"
import {sendCommentActionCreator, updateNewCommentTextActionCreator} from "../redux/comments-reducer";

let Comments=(props)=>{
    let state=props.commentsPage;
    let clientsElements=state.clients.map(c=><div>{c.id}:{c.name}</div>)
    let commentsElements=state.comments.map(c=><div>{c.id}:{c.comment}</div>)
    let newCommentsText=state.newCommentsText;

    let onSendCommentsClick=()=>{
        //props.store.dispatch(sendCommentActionCreator())
        props.sendCommentActionCreator()
    }
    let onNewCommentsChange=(e)=>{
        let text = e.target.value;
        props.updateNewCommentTextActionCreator(text)
        //props.store.dispatch(updateNewCommentTextActionCreator(text))
    }

    return(
            <div className={style.allBody}>
                <div>
                    {clientsElements}
                </div>
                <div>
                    {commentsElements}
                </div>
                <div>
                    <div><textarea value={newCommentsText}
                                   onChange={onNewCommentsChange} placeholder="enter your comment"/></div>
                    <div><button onClick={onSendCommentsClick}>Send</button></div>
                </div>
            </div>
    )
}

export default Comments;