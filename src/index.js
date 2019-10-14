import React, { Component } from 'react';
import { render } from 'react-dom';
import SimpleTransition from "./simple-transition.js";
import TransitionList from "./Transition-Card/transition-list.js";
import './bootstrap.min.css';
import './style.css';
import cards from "./Transition-Card/data.json";



class App extends Component {

  render() {
    return (
      <div>
        <SimpleTransition />
        <TransitionList cards={cards} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
