import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
 counter = 9
  state = {
    tasks: [
      { id: 0, text: 'przeczytać książkę', date: '2019-09-12', important: true, active: true,finishDate: null
      },
      { id: 1, text: "zrobić dobry uczynek", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 2, text: "pomalować dom", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 3, text: "pójść na siłownię", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 4, text: "sprzedać stare książki", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 5, text: "jeszcze raz pomalować dom", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 6, text: "fryzjer!!!", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 7, text: "odebrać paczkę", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 8, text: "kupić mleko", date: '2019-09-11', important: false, active: true, finishDate: null },
    ]
  }

      
  deleteTask = (id) => {
    console.log("delete el o id" + id);
    // I sposób
    // const tasks = [...this.state.tasks]; //kopia tablicy
    // const index = tasks.findIndex(task => task.id === id); //sprawdza, czy id task jest równe id przekazanemu przez funkcję
    // tasks.splice(index, 1); //usuwa ten 1 wskazany element
    
    // this.setState({
    //   tasks //przekazanie nowej tablicy do starej
    // })

    // II sposób
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id) //ten element, który pasuje, nie zostanie przeniesiony do nowej tablicy
    this.setState({
      tasks 
    })
  }

  changeTaskStatus = (id) => {
    console.log("change el o id" + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter, 
      text: text, //text z input 
      date: date,
      important: important, 
      active: true, 
      finishDate: null
    }
    this.counter++

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task] //tworzymy nową tablice, którą przypisujemy do tasks; dodajemy nowe zadanie
    }))
    return true
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
