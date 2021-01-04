import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCategoryNames} from "../state/selectors";
import {CHOOSE_CATEGORY_ACTION} from "../state/actions";

const Navbar = ({ activeCategory, categoryNames, setCurrentCategory }) => (
    <nav className="navbar navbar-light">
        <a className="navbar-brand btn btn-outline-primary" href="/">Home bookshelf</a>
        <ul className="navbar-nav d-flex flex-row mr-auto">
            {categoryNames.map(name => (
                <li className={ "nav-item pr-3" + (name === activeCategory ? " active" : "")} key={name}>
                    <a className="nav-link"
                       href="/#"
                       onClick={(event) => {
                           setCurrentCategory(name)
                       }}
                    >{name}</a>
                </li>
            ))}
        </ul>
    </nav>
)

Navbar.propTypes = {
    categoryNames: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = (state) => ({
    categoryNames: getCategoryNames(state),
    activeCategory: state.activeCategory
})

const mapDispatchToProps = dispatch => ({
    setCurrentCategory(categoryName) {
        dispatch({type: CHOOSE_CATEGORY_ACTION, payload: { activeCategory: categoryName} })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)