import DISHES from '../data/dishes'
import COMMENT from '../data/Comment'

const initialState={
    dishes: DISHES,
    comment: COMMENT,
}

export const Reducer=(state=initialState,action)=>{
    
    if(action.type==="ADD_COMMENT"){
        const comment= action.payload
        comment.id=state.comment.length;
        comment.date=new Date().toDateString();
        console.log(comment);
        return{
            ...state,
            comment: state.comment.concat(comment)
        }
    }
    return state
}