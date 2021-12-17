import React, {useState} from 'react';
import './App.css';
import TaskList from './components/TaskList';

const TASKS = [
  {
    id: 1,
    text: 'Mow the lawn',
    showDesc: true,
    done: false,
  },
  {
    id: 2,
    text: 'Cook Pasta',
    showDesc: true,
    done: true,
  },
  {
      id: 3,
      text: 'Make Bed',
      showDesc: true,
      done: true,
  }
];

const App = () => {
    const [stateTasks, setTasks] = useState(TASKS);

    const toggleTask = (id) => {
        console.log('Inside Toggle Task function in App');
        let newTasks = [...stateTasks];
        let updatedTasks = stateTasks.map((task) => {
            if(task.id == id) {
                task.done = !task.done;
            }
            return task;
        });
        setTasks(updatedTasks);

    };

    const deleteTask = (id) => {
        console.log('Inside delete task for id ' + id);
        let updatedTasks = stateTasks.filter((task) => {
            if(task.id == id) {
                return false;
            } else {
                return true;
            }
        });
        setTasks(updatedTasks);
    };

    const toggleDesc = (id) => {
        let newTasks = [...stateTasks];
        let updatedTasks = newTasks.map((task) => {
            if(task.id == id) {
                task.showDesc = !task.showDesc;
            }
            return task;
        });
        setTasks(updatedTasks);
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={stateTasks} toggleFn={toggleTask} deleteFn={deleteTask} descFn={toggleDesc}/>
        </div>
      </main>
      <button onClick={() => toggleDesc(1)}>show desc for 1</button>
    </div>
  );
};

export default App;
