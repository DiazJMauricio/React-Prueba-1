import React, { Component } from 'react';
import './App.css';
import Cop1 from './components/cop1';

import { infos } from './info.json';
console.log(infos);

class App extends Component {
  constructor(){
    super();
    this.state = {
      infos
    }
  }

  render() {
    const cuadros = this.state.infos.map((info, i) => {
        return(
          <Cop1 content={info.title} />
        )
    })

    return (
      <div className="App">
        { cuadros }
      </div>
    );
  }
}

export default App;
