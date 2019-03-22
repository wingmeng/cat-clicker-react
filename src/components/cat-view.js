import React from 'react'

function CatView(props) {
  let { name, clicks, imgUrl } = props.cat;

  return (
    <div className="cat-view">
      <p>
        {/* 猫的名称和点击数 */}
        <strong>{name}</strong>
        <span className="cat-clicks">{clicks}</span> clicks
      </p>

      {/* 猫的照片，注：标签必须正常闭合 */}
      <img src={`images/${imgUrl}`} alt={name}
        onClick={() => props.onCatClick()}
      />
    </div>
  )
}

export default CatView;
