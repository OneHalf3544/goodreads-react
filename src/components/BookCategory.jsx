import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ADD_BOOK_ACTION, DELETE_BOOK_ACTION} from "../state/actions";

const BookCategory = ({name, books, addBook, deleteBook}) => {
    const [newName, setNewName] = useState("")

    return (<div className="card">
        <h2 className="card-header">{name}</h2>
        <ul className="card-body list-group p-0">
            {books.map(book => <li className="list-group-item d-flex p-1" key={book.title}>
                <div className="flex-grow-1">{book.title}</div>
                <button className="btn btn-danger" onClick={e => deleteBook(book)}>Delete</button>
            </li>)}
        </ul>
        <div className="card-footer d-flex flex-row p-1">
            <input className="flex-grow-1" inputMode="text" value={newName} onChange={e => setNewName(e.target.value)} />
            <button className="btn btn-primary" name="addButton" onClick={ e => addBook(newName, setNewName)}>Добавить</button>
        </div>
    </div>)
}

BookCategory.propTypes = {
    name: PropTypes.string,
    books: PropTypes.arrayOf(PropTypes.object)
}

const mapDispatchToProps = dispatch => ({
    addBook(newName, setName) {
        dispatch({ type: ADD_BOOK_ACTION, payload: { book: {title: newName} } })
        setName("")
    },
    deleteBook(book) {
        dispatch({ type: DELETE_BOOK_ACTION, payload: { book } })
    }
})

export default connect(null, mapDispatchToProps)(BookCategory)