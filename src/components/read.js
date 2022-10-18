//Imports
import React from "react";
import { Books } from "./books";
import axios, { Axios } from "axios";

//Read Component
export class Read extends React.Component {


    //Lifecycle hook, becomes active when component becomes visible
    componentDidMount() {
        //Axios acts as HTTP Client
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
            //Callback function 1
            .then((response) => {
                this.setState({ books: response.data })
            })
            //Callback function 2
            .catch((error)=>{
                console.log(error);
            })
    }

    //State
    state = {
        books: []

    }

    //Render Method
    render() {
        return (
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books} ></Books>
            </div>
        );
    }
}