import React from 'react';
import { useDispatch } from 'react-redux';

const CompleteItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li
      className={`border border-2 list-group-item my-2 ${
        item.check && 'border-primary text-primary'
      }`}
    >
      <div className="d-flex justify-content-between align-items-center">
        <p className=" text-text" style={{ marginBottom: 0 }}>
          {item.title}
        </p>
        <i>
          <img
            src="https://img.icons8.com/color/1x/checkmark.png"
            className="tick-img"
          />
        </i>
      </div>
    </li>
  );
};

export default CompleteItem;
