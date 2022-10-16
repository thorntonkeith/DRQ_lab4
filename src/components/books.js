//Imports
import React from "react";
import { BookItem } from "./bookItem";

//Books Component
export class Books extends React.Component {
    //Render Method
    render() {
        //Returning properties of books
        return this.props.books.map((book) => {
            return <BookItem book={book} key={book.isbn} ></BookItem>
        }

        );
    }
}