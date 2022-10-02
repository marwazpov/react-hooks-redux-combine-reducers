import { combineReducers} from "redux";
import authorsReducers from "./features/features/authors/authorSlice";
import booksReducer from "./features/features/books/booksSlice";

const rootReducer = combineReducers ({
    authors: authorsReducers,
    books: booksReducer,
});

export default rootReducer;