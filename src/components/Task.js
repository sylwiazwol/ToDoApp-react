import React from 'react';

const Task = (props) => {

  const styles = {
    color: "red",
  }

  const {text, date, id, active, important, finishDate} = props.task; //destrukturyzacja

  if(active) {
  return ( 
    <div>
      <p>
        <strong style={important ? styles : null}>{text}</strong> - do <span>{date} </span> {/* przypisanie koloru do zadań priorytetowych */}
        <button onClick={() => props.change(id)}>Zostało zrobione</button>
        <button onClick={() => props.delete(id)}>X</button>
      </p>

    </div>
   );
  } else{
    const finish = new Date(finishDate).toLocaleString() //wyodrębnienie daty
     return(
       <div>
         <p>
        <strong>{text}</strong><em> ( zrobić do {date} )</em><br/>
        -potwierdzenie wykonania <span>{finish}</span>
        <button onClick={() => props.delete(id)}>X</button>
      </p>
       </div>
     )
   }
}
 
export default Task;