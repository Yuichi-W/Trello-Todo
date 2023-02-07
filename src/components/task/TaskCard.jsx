import React, { useState } from 'react';
import TaskAddInput from './input/TaskAddInput';
import TaskCardDeleteButton from './button/TaskCardDeleteButton';
import TaskCardTitle from './TaskCardTitle';
import Tasks from './Tasks';
import { Draggable } from 'react-beautiful-dnd';

export const TaskCard = ({taskCardsList, setTaskCardsList, taskCard, index}) => {

    const [inputText, setInputText] = useState("");
    const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div 
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="taskCardTitleAndTaskCardDeleteButtonArea" {...provided.dragHandleProps} >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks 
            inputText={inputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
