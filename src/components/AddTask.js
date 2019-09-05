import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {

  minDate = new Date().toISOString().slice(0,10);
  state ={
      text: '',
      checked: false,
      date: new Date().toISOString().slice(0,10) //potrzebujemy tylko daty, dlatego trzeba odciąć pozostałe wartości; domyslne ustawienie daty
  }

  handelText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handelCheckbox = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value
    })
  } //wybór daty

  handleClick = () =>{

    const {text, checked, date} = this.state
    if(text.length>2){
    const add = this.props.add(text, date, checked)
    if(add){
      this.setState({
        text: '',
        checked: false,
        date: this.minDate
      })
    } //czyszczenie pól formularza
  }
}
  render() {
    
    let maxDate = this.minDate.slice(0,4)*1 + 1; //mnożenie zamieni string na number
    maxDate = maxDate + "-12-31" //daje datę: 2020-12-31
    return (
      <div className="form">
          <input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handelText}></input>
          <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handelCheckbox}/>
          <label htmlFor="important">Priorytet</label><br/>
          <label htmlFor="date">Do kiedy zrobić</label>
          <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}/><br/>
          <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;