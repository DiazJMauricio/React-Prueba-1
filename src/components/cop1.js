import React, { Component } from 'react';

class Cop1 extends Component {
    
    render(){
        return(
            <div className="cuadro">
                <h2>{ this.props.content }</h2>
            </div>
        );
    }
}

export default Cop1;
