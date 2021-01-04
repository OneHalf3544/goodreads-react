import {getActiveCategory} from "../state/selectors";
import BookCategory from "./BookCategory";
import {connect} from "react-redux";
import React from "react";
import PropTypes from "prop-types";

const CurrentBookCategory = ({category}) => (
    <div className="row">
       <div className="col-6" key={category.name}>
            <BookCategory
                name={category.name}
                books={category.books} />
        </div>
    </div>
)

CurrentBookCategory.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string,
        books: PropTypes.arrayOf(PropTypes.object)
    })
}

const mapStateToProps = (store) => ({
    category: getActiveCategory(store)
})

export default connect(mapStateToProps)(CurrentBookCategory)