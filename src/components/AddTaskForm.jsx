import React, { useState } from 'react';
import { Plus } from 'lucide-react';


const AddTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  
  const handleSubmit = () => {
    if (newTask.trim() === '') return;
    
    onAddTask(newTask.trim());
    setNewTask('');
  };

  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Task</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center gap-2"
        >
          <Plus size={18} />
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTaskForm;