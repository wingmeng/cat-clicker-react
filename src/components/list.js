import React from 'react'

// 猫的列表
function List(props) {
  return (
    <ul className="list">
      {props.items && props.items.map((item, idx) => (
        <li key={idx}
          className={props.activeIdx === idx ? 'active' : ''}
          onClick={() => props.onItemClick(idx)}
        >{item.name}</li>
      ))}
    </ul>
  )
}

export default List;
