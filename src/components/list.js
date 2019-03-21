import React from 'react';

function List(props) {
  let { className, items, activeItem, onItemClick } = props;

  return (
    <ul className={className}>
      {items && items.map((item, idx) => (
        <li key={idx}
          className={idx === activeItem ? 'active' : ''}
          onClick={() => onItemClick && onItemClick(idx)}
        >{item.name}</li>
      ))}
    </ul>
  )
}

export default List;
