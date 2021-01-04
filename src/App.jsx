import React from 'react';
import Navbar from "./components/Navbar";
import BookCategory from "./components/BookCategory";
import {createStore, Reducer} from "redux";
import {Provider} from "react-redux";
import {ReduxState} from "./State";
import {Book} from "./models/Book";

function reducer(state: ReduxState, action: any): ReduxState {
    return state
}

const store = createStore(reducer, null)

const App = () => (
    <Provider store={store}>
        <header>
            <Navbar items={["Books I have", "Books I want to buy"]} />
        </header>
        <main className="container">
            <div className="row">
                <div className="col-6">
                    <BookCategory
                        name="Books I have"
                        books={[
                            new Book("PostgreSQL"),
                            new Book("GraphQL"),
                            new Book("Learn React")
                        ]} />
                </div>
                <div className="col-6">
                    <BookCategory
                        name="Books I want to buy"
                        books={[
                            new Book("Webpack in Action"),
                            new Book("Machine learning in 21 days"),
                            new Book("How to stop programming in weekends")
                        ]} />
                </div>
            </div>
        </main>
    </Provider>
)

export default App;
