import './App.css';
import { useState } from 'react';
import TaskAdder from './components/TaskAdder';
import nextId from "react-id-generator";
import TaskShow from './components/TaskShow';

function App() {
  const [data, setData] = useState([]);

  const deleteDataMain = (datos)=>{
    setData(data.filter(dataFilter=>dataFilter.id !== datos))
  }
  
  
  const dataFunction = (information)=>{
    setData([
      ...data,
      {
      id:nextId(),
      info:information
      }
    ])
  }
  
  return (
    <div className="App">
      <h1>TODO-APP</h1>
      <TaskAdder dataFunction={dataFunction}></TaskAdder>
      {data.length>0 ? <TaskShow data={data} deleteDataMain={deleteDataMain}></TaskShow> : <p>there're no tasks</p>}
    </div>
  );
}

export default App;
