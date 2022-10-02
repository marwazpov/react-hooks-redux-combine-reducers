import { v4 as uuid } from 'uuid';
//Action Creators
export const addAuthor = (author) => {
    return{
        type: "authors/add",
        payload:author,
    };
};

export const removeAuthor = (id) => {
    return{
        type: "authors/remove",
        payload:is,
    };
}

//Reducers
const initialState = [];
export default function authorsReducers(state=initialState, action){
    switch (action.type) {
        case "authors/add":
            return [...state, action.payload];
        case "action/remove":
            return state.filter((author)=>author.id !== action.payload);
        case "books/add":
            const exsistingAuthor =state.find(
                (author)=>author.authorName===action.payload.authorName
            ); 
            if (exsistingAuthor) {
                return state;
            } else {
                return [...state, {authorName: action.payload,authorName, id:uuid()}];
            }
        default:
            return state;    
    }
}