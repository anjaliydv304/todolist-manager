import AddTaskForm from './AddTaskForm';
import TaskStatistics from './TaskStatistics';
import TodoItem from './TodoItem';
import { addTask, deleteTask, toggleComplete, updateTask } from '../utils/taskManager';


const TodoList = ({ tasks, setTasks }) => {
  

  const handleAddTask = (taskText) => {
    const newTasks = addTask(tasks, taskText);
    setTasks(newTasks);
  };


  const handleDeleteTask = (id) => {
    const newTasks = deleteTask(tasks, id);
    setTasks(newTasks);
  };


  const handleToggleComplete = (id) => {
    const newTasks = toggleComplete(tasks, id);
    setTasks(newTasks);
  };

  const handleUpdateTask = (id, newText) => {
    const newTasks = updateTask(tasks, id, newText);
    setTasks(newTasks);
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📝 Todo List Manager
          </h1>
          <p className="text-gray-600">
            Stay organized and productive with your daily tasks
          </p>
        </div>

        {/* Statistics */}
        <TaskStatistics tasks={tasks} />

        {/* Add Task Form */}
        <AddTaskForm onAddTask={handleAddTask} />

        {/* Task List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Your Tasks</h2>
          </div>
          
          {tasks.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-lg">No tasks yet!</p>
              <p className="text-sm">Add your first task above to get started.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {tasks.map((task) => (
                <TodoItem
                  key={task.id}
                  task={task}
                  onDelete={handleDeleteTask}
                  onToggleComplete={handleToggleComplete}
                  onUpdate={handleUpdateTask}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Stay productive! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;