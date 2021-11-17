const UPDATE_NEW_COMMENTS_TEXT="UPDATE-NEW-COMMENTS-TEXT";
const SEND_COMMENTS="SEND-COMMENTS";

let initialState={
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

export const commentsReducer=(state=initialState,action)=>{
   // let stateCopy;
    //stateCopy.comments=[...state.comments]

    switch (action.type){
        case UPDATE_NEW_COMMENTS_TEXT:
            return  {
                ...state,
                newCommentsText:action.text,
            }
            //stateCopy.newCommentsText=action.text;
            //state.newCommentsText=[...state,...state.newCommentsText=action.text]
            //return stateCopy;

        case SEND_COMMENTS:
            let text=state.newCommentsText;
            return {
                ...state,
                newCommentsText:"",
                comments:[...state.comments,{id:5,comment: text}]
            }

          //  stateCopy.newCommentsText="";
           // stateCopy.comments.push({id:5,comment: text});

            //return stateCopy;

        default:
            return state;
    }
}
export const  updateNewCommentTextActionCreator=(text)=>{
    return({
        type:UPDATE_NEW_COMMENTS_TEXT,
        text:text
    })
}
export const  sendCommentActionCreator=()=>{
    return({
        type:SEND_COMMENTS,
    })
}
export default commentsReducer;