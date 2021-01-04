import React from "react";
import {BookCategoryData} from "../models/Book";

const BookCategory = ({name, books}: BookCategoryData) => (
    <div>
        <h2>{name}</h2>
        <ul>
            { books.map(book => <li>{book.title}</li>)}
        </ul>
        <div className="d-flex flex-row">
            <input inputMode="text" value="" />
            <button className="btn btn-primary" name="Добавить" />
        </div>
    </div>
)


export default BookCategory