import logo from './logo.svg';
import './App.css';
import React from 'react';
import Popup from './Popup.js'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    showAddPopup: false,
  };
  
  toggleAddPopup = e => {
    this.setState({
      showAddPopup: !this.state.showAddPopup
    });
  };

  hideAddPopup = () => {
    this.setState({
      showAddPopup: false
    });
  };

  addPopupComponents 

  render() {
    return (
      <div className="App">

        <button onClick={e => { this.toggleAddPopup(); }}> Show Add Pop Up </button>
        <p> Hello! </p>

        <Popup show={this.state.showAddPopup} onHide={this.hideAddPopup} components={
          <h1> Hello! </h1>
        }/>

      </div>
    );
  }
}


export default App;
