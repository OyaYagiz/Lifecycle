import React from "react";

class Pagination extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isDarkMode: true,
            count: 3, 
        };
    }

    // ekrana basılma anı
    componentDidMount(){
        console.log('componentDidMount çalıştı' );
    }  
    //ekrana gönderme anını izleme
    componentWillUnmount(){
        console.log('componentWillUnmount çalıştı' );
    }
    // güncelleme anını izleme
    componentDidUpdate(){
        console.log('componentDidUpdate çalıştı' );
    }
    render() {
        return(
            <div className="d-flex justify-content-center my-5">
                <button className="btn btn-secondary"
                disabled={this.state.count === 1}
                onClick={() => this.setState({...this.state, count: this.state.count - 1})}>-</button>
                <h1>SAYFA {this.state.count} </h1>
                <button className="btn btn-success"
                onClick={() => this.setState({...this.state, count: this.state.count + 1})}>+</button>
            </div>
        );
    }
}

export default Pagination;