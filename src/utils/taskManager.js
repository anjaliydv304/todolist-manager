
export const createTask = (text) => ({
  id: Date.now(),
  text: text.trim(),
  completed: false,
  createdAt: new Date().toLocaleDateString(),
  updatedAt: new Date().toLocaleDateString()
});


export const addTask = (tasks, taskText) => {
  if (!taskText || taskText.trim() === '') return tasks;
  
  const newTask = createTask(taskText);
  return [newTask, ...tasks];
};


export const deleteTask = (tasks, id) => {
  return tasks.filter(task => task.id !== id);
};


export const toggleComplete = (tasks, id) => {
  return tasks.map(task => 
    task.id === id 
      ? { 
          ...task, 
          completed: !task.completed,
          updatedAt: new Date().toLocaleDateString()
        }
      : task
  );
};

export const updateTask = (tasks, id, newText) => {
  if (!newText || newText.trim() === '') return tasks;
  
  return tasks.map(task =>
    task.id === id
      ? { 
          ...task, 
          text: newText.trim(),
          updatedAt: new Date().toLocaleDateString()
        }
      : task
  );
};

export const getTaskStatistics = (tasks) => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return {
    total,
    completed,
    pending,
    completionRate
  };
};


export const filterTasks = (tasks, filter) => {
  switch (filter) {
    case 'completed':
      return tasks.filter(task => task.completed);
    case 'pending':
      return tasks.filter(task => !task.completed);
    case 'all':
    default:
      return tasks;
  }
};