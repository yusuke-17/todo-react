import React, { useState } from "react";
import "../App.css";

type EditTodoProps = {
  initialTask: string;
  onSave: (editTask: string) => void;
  onCancel: () => void;
};

const EditTodo: React.FC<EditTodoProps> = ({
  initialTask,
  onSave,
  onCancel,
}) => {
  const [editTask, setEditTask] = useState(initialTask);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTask(e.target.value);
  };

  const handleEditSave = () => {
    onSave(editTask);
  };

  return (
    <>
      <input type="text" value={editTask} onChange={handleEditChange} />
      <button onClick={handleEditSave}>保存</button>
      <button onClick={onCancel}>キャンセル</button>
    </>
  );
};

export default EditTodo;
