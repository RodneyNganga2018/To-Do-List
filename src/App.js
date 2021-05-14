import './App.css';
import Form from './components/Form';
import List from './components/List';
import React,{useState} from 'react';

function App() {
  const [list, setList] = useState([
  ]);

  const handleNewTask = (task) => {
    setList([...list,task]);
  }

  const handleDoneTask = (task) => {
    setList([
      ...list.slice(0,task.pos),
      task.item,
      ...list.slice(task.pos+1)
    ])
  }

  const handleRemovedTask = (idx) => {
    setList([
      ...list.slice(0,idx),
      ...list.slice(idx+1)
    ])
  }

  return (
    <div className="App">
      <Form task={handleNewTask}/>
      <List list={list} done={handleDoneTask} remove={handleRemovedTask}/>
    </div>
  );
}

export default App;
