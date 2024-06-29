// src/components/TaskList.js
// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../features/tasks/tasksSlice';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => dispatch(deleteTask(task.id))}
          onToggle={() => dispatch(toggleComplete(task.id))}
        />
      ))}
    </div>
  );
};

export default TaskList;
