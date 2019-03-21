import React from 'react';

function CatView(props) {
  let { cat, onCatClick } = props;
  let { name, clicks, imgUrl } = cat;

  return (
    <div className="cat-detail">
      <p>
        <strong>{name}</strong>
        <span className="cat-clicks">{clicks}</span> clicks
      </p>
      <img src={`images/${imgUrl}`} alt={name}
        onClick={() => onCatClick && onCatClick()}
      />
    </div>
  )
}

export default CatView;
