import React, { useState } from 'react';
import { Edit2, Trash2, Check, X } from 'lucide-react';


const TodoItem = ({ task, onDelete, onToggleComplete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const startEdit = () => {
    setIsEditing(true);
    setEditText(task.text);
  };

  const saveEdit = () => {
    if (editText.trim() === '') return;
    
    onUpdate(task.id, editText.trim());
    setIsEditing(false);
  };


  const cancelEdit = () => {
    setIsEditing(false);
    setEditText(task.text);
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      saveEdit();
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  return (
    <div
      className={`p-4 transition-colors duration-200 ${
        task.completed ? 'bg-green-50' : 'hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            task.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-500'
          }`}
          title={task.completed ? 'Mark as pending' : 'Mark as complete'}
        >
          {task.completed && <Check size={14} />}
        </button>

        <div className="flex-1">
          {isEditing ? (
            
            <div className="flex gap-2">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <button
                onClick={saveEdit}
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                title="Save changes"
              >
                <Check size={16} />
              </button>
              <button
                onClick={cancelEdit}
                className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                title="Cancel editing"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div>
              <div
                className={`text-lg ${
                  task.completed
                    ? 'line-through text-gray-500'
                    : 'text-gray-800'
                }`}
              >
                {task.text}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Created: {task.createdAt}
              </div>
            </div>
          )}
        </div>

        {!isEditing && (
          <div className="flex gap-2">
            <button
              onClick={startEdit}
              className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
              title="Edit task"
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
              title="Delete task"
            >
              <Trash2 size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;