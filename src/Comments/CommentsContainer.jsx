import * as React from "react";
import {sendCommentActionCreator, updateNewCommentTextActionCreator} from "../redux/comments-reducer";
import Comments from "./Comments";
import {connect} from "react-redux";
/*
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
*/

/*let CommentsContainer=(props)=>{
    let state=props.store.getState().commentsPage;
   /!* let clientsElements=state.clients.map(c=><div>{c.id}:{c.name}</div>)
    let commentsElements=state.comments.map(c=><div>{c.id}:{c.comment}</div>)
    let newCommentsText=state.newCommentsText;
*!/
    let onSendCommentsClick=()=>{
        props.store.dispatch(sendCommentActionCreator())
    }
    let onNewCommentsChange=(text)=>{
        //let text = e.target.value;
        props.store.dispatch(updateNewCommentTextActionCreator(text))
    }

    return(<Comments commentsPage={state}
                     sendCommentActionCreator={onSendCommentsClick}
                     updateNewCommentTextActionCreator={onNewCommentsChange}/>)
}*/
 let mapStateToProps=(state)=>{
    return{
        commentsPage:state.commentsPage
    }
 }
 let mapDispatchToProps=(dispatch)=>{
    return{
        sendCommentActionCreator:()=>{
            dispatch(sendCommentActionCreator())
        },
        updateNewCommentTextActionCreator:(text)=>{
            dispatch(updateNewCommentTextActionCreator(text))
        }
    }
 }
const CommentsContainer=connect(mapStateToProps,mapDispatchToProps)(Comments)

export default CommentsContainer;