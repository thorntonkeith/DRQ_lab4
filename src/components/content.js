//Imports
import React from "react";

//Content Component
export class Content extends React.Component {
    render() {
        return (
            <div>
                {/* Content JSX */}
                <h1>hello world</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        )
    }
}