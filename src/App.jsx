import React from 'react';
import Navbar from "./components/Navbar";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./state/Store";
import CurrectBookCategory from "./components/CurrectBookCategory";


const store = createStore(reducer)

const App = () => (
    <Provider store={store}>
        <header className="container">
            <Navbar />
        </header>
        <main className="container">
            {/*<BookCategoriesList/>*/}
            <CurrectBookCategory/>
        </main>
    </Provider>
)

export default App;
