import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export const Task = ({index, task, taskList, setTaskList}) => {

    const handleDelete = (id) => {
        // taskListからtask１個ずつ出して削除対象IDと合っていなければ残す  要は条件に合うもので絞っている
        setTaskList(taskList.filter((task) => task.id !== id));
    }

  return (
    // Draggableで囲うと要素がドラッグできる範囲になる
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div 
          className="taskBox" 
          key={task.id} 
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          {/* 押下時のみ削除処理実行のため無名関数とする */}
          <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
