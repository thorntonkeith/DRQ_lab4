//Imports
import React from "react";
import { BookItem } from "./bookItem";

//Books Component
export class Books extends React.Component {
    render() {
        return this.props.books.map((book) => {
            return <BookItem book={book} key={book.isbn} ></BookItem>
        }

        );
    }
}