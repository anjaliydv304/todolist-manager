import  { useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;