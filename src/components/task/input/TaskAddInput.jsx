import React from 'react';
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList
}) => {

  const handleSubmit = (e) => {
    // タスク追加時にユニークID作成
    const taskId = uuid();
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    // カードを追加する
    // idはユニークなidを設定する　削除したものと次作成したものでIDが重複するから UUIDというライブラリを使用する
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      }
    ]);
    setInputText("");
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='taskAddInput'
          type="text" 
          placeholder='add a task'
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
}

export default TaskAddInput;
