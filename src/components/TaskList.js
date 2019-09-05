import React from 'react';
import Task from './Task'

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  // done.sort((a,b) => b.finishDate - a.finishDate ) //nowy element będzie wyświetlany na górze listy, a stare zadania zrobione, bedą na końcu; kolejność zależy od indexu a i b ( =0, >0, <0)

  if(done.length >= 2 ){
  done.sort((a,b) => {
    if(a.finishDate < b.finishDate){
      return 1
    }
    if(a.finishDate > b.finishDate){
      return -1
    }
    return 0 // gdy liczby są takie same
  })
  //ustalenie kolejności wyświetlania zadań zrobionych
  }

  if(active.length >= 2 ){
    active.sort((a,b) => {

      a = a.text.toLowerCase();
      b = b.text.toLowerCase(); //warunek potrzebny do tego, żeby duże litery nie zmieniały kolejności

      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    })
} //alfabetyczne ustawienie zadań na liście Zadań do zrobienia

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

  return ( 
    <>
    <div className="active">
      <h1>zadania do zrobienia</h1>
     {activeTasks.length > 0 ? activeTasks : <p>brak zadań</p>}
    </div>

    <hr/>

    <div className="done">
      <h2>zadania zrobione <span>( {done.length} )</span></h2>
      {doneTasks.slice(0,5)} {/*będzie wyświetlane tylko 5 elementów */}
  {done.length > 5 && <span style={{fontSize: "10px"}}>wyświetlonych jest tylko 5 ostatnich zadań</span> }
    </div>
</>
   );
}
 
export default TaskList;