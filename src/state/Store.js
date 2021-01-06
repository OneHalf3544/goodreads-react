import {ADD_BOOK_ACTION, CHOOSE_CATEGORY_ACTION, DELETE_BOOK_ACTION, MODIFY_BOOK_ACTION} from "./actions";
import {getActiveCategory} from "./selectors";
import produce from 'immer'

export const initialState = {
    activeCategory: "Books I have",
    categories: [
        {
            name: "Books I have",
            books: [
                { title: "PostgreSQL" },
                { title: "GraphQL" },
                { title: "Learn React" }
            ]
        }, {
            name: "Books I want to buy",
            books: [
                { title: "Webpack in Action" },
                { title: "Machine learning in 21 days" },
                { title: "How to stop programming in weekends" }
            ]
        }
    ]
}

export const reducer = (state = initialState, action) => {
    return produce(state, draft => {
        console.log(`reduce ${JSON.stringify(action)}`)
        switch (action.type) {
            case ADD_BOOK_ACTION:
                getActiveCategory(draft).books.push(action.payload.book)
                break
            case MODIFY_BOOK_ACTION: {
                const activeCategory = getActiveCategory(draft);
                const {newBook, oldBook} = action.payload;
                activeCategory.books = activeCategory.books.map(book => book.title === oldBook.title ? newBook : book)
                break
            }
            case DELETE_BOOK_ACTION:
                const activeCategory = getActiveCategory(draft);
                activeCategory.books = activeCategory.books.filter(book => book.title !== action.payload.book.title)
                break
            case CHOOSE_CATEGORY_ACTION:
                draft.activeCategory = action.payload.activeCategory
                break
            default:
                break
        }
    })
}
