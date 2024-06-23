import React from "react";

class Pagination extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count: 3, 
        };
    }

    render() {
        return(
            <div className="d-flex justify-content-center my-5">
                <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
                <h1>SAYFA {this.state.count} </h1>
                <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
            </div>
        );
    }
}

export default Pagination;