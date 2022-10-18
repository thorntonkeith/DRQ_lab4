//Imports
import React from "react";

//Create Component
export class Create extends React.Component {


    constructor(){
        super();
        //Events
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);

        this.state = {
            title:'',
            cover:'',
            author:''

        }
    }
    handleSubmit(e){
        e.prevent.preventDefault();
        console.log(`button clicked ${this.state.title},
        ${this.state.cover},
        ${this.state.author}`);
        this.setState({
            title:'',
            cover:'',
            author:''
        })
    }

    //Method for updating Book Title
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }

    //Method for updating Book Cover
    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }

    //Method for updating Book Author
    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }



    //Render Method
    render() {
        return (
            <div>
                <h3>Hello from my Create component!</h3>

                {/*onSubmit form for user input */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>

                    {/* Submit Button */}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}