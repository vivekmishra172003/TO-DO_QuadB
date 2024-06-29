/* eslint-disable react/prop-types */
// src/components/TaskItem.js
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/tasks/tasksSlice';

// eslint-disable-next-line react/prop-types
const TaskItem = ({ task, onDelete, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  // eslint-disable-next-line react/prop-types
  const [editedTask, setEditedTask] = useState(task.title);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ ...task, title: editedTask }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
        <span
          style={{
            textDecoration: task.completed ? 'line-through' : 'none'
          }}
        >
          {task.title}
        </span>
      )}
      <button onClick={onToggle}>
        {task.completed ? 'Unmark' : 'Complete'}
      </button>
      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
