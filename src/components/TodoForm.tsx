import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/features/todoSlice';

const TodoForm = (): JSX.Element => {
  //Input value
  const [text, setText] = useState('');
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    dispatch(addItem({ title: text, check: check }));
    setText('');
  };

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <div className="todo-view">
        <span className="add-item">ADD ITEM</span>
        <img
          src="https://img.icons8.com/pastel-glyph/256/ingredients-list--v2.png"
          className="img-list"
        />
        <span className="input-span">What do you want to do?</span>
        <div className="input-group">
          <input
            className="form-control"
            value={text}
            placeholder="I want to do something good"
            onChange={(e: { target: HTMLInputElement }) =>
              setText(e.target.value)
            }
          />
          {/* Submit button */}
          <button type="submit" className="btn btn-primary">
            +
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
