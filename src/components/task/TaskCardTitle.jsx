import React,{ useState } from 'react';

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today Task");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    // enter押下時にページ更新するのを制御する
    e.preventDefault();
    setIsClick(false);
  }

  const handleBlur = () => {
    setIsClick(false);
  }

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        // formタグがEnter押下時に更新する[onSubmit]Enter押下時に呼ばれる
          <form onSubmit={handleSubmit}>
            {/* onBlurはinputから外れて押下された時呼ばれる */}
            <input 
              className="taskCardTitleInput"
              autoFocus
              type="text" 
              onChange={handleChange} 
              onBlur={handleBlur}
              value={inputCardTitle}
              maxLength="10"
            />
          </form>
         ) : (
         <h3>{inputCardTitle}</h3>
        )}
    </div>
  );
}

export default TaskCardTitle;
