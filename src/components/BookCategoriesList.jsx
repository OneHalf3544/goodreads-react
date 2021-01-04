import {getCategories} from "../state/selectors";
import BookCategory from "./BookCategory";
import { connect } from "react-redux";
import React from "react";

const BookCategoriesList = ({categories}) => (
    <div className="row">
        { categories.map(category => (
            <div className="col-6" key={category.name}>
                <BookCategory
                    name={category.name}
                    books={category.books} />
            </div>
        ))}
    </div>
)

const mapStateToProps = (store) => ({
    categories: getCategories(store)
})

export default connect(mapStateToProps)(BookCategoriesList)