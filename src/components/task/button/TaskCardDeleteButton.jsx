import React from 'react';

const TaskCardDeleteButton = ({taskCardsList, setTaskCardsList, taskCard}) => {

  const taskCardDeleteButton = (id) => {
    // タスクカード削除処理
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  }


  return (
    <div>
      <button 
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <i className="fa-regular fa-circle-xmark"></i>
      </button>
    </div>
  );
}

export default TaskCardDeleteButton;
