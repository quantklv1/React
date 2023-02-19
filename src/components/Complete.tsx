import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/app/store';
import CompleteItem from './CompleteItem';

const Complete = () => {
  const dispatch = useDispatch();

  const list = useSelector((state: RootState) => state.todoComplete);

  if (list.length === 0) {
    return <h2 className="text-center my-3 text-danger">LIST IS EMPTY</h2>;
  }
  return (
    <div className="complete-view">
      <span className="todo-complete">COMPLETED</span>
      <img
        src="https://img.icons8.com/ios-filled/256/test-passed.png"
        className="img-complete"
      />
      <div className="container-fluid my-3" id="todo-id">
        {/* List */}
        <ul className="list-group">
          {list.map((item) => {
            return <CompleteItem key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Complete;
