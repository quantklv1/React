import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/app/store';
import TodoItem from './TodoItem';
import { clearList } from '../redux/features/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();

  const list = useSelector((state: RootState) => state.todo);

  const handleClear = () => {
    dispatch(clearList());
  };

  if (list.length === 0) {
    return <h2 className="text-center my-3 text-danger">LIST IS EMPTY</h2>;
  }
  return (
    <div className="todo-list">
      <span className="todo-item">TO-DO LIST</span>
      <img
        src="https://img.icons8.com/ios-filled/256/bulleted-list.png"
        className="img-todo"
      />
      <div className="container-fluid my-3" id="todo-id">
        {/* List */}
        <ul className="list-group">
          {list.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          })}
        </ul>
        <button onClick={handleClear} className="w-100 btn btn-danger mt-3">
          CLEAR LIST
        </button>
      </div>
    </div>
  );
};

export default TodoList;
