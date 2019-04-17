import React from 'react'
import PropTypes from 'prop-types'
import OutputInfo from './output-info'

function CatView(props) {
  let { name, clicks, imgUrl } = props.cat;

  return (
    <div className="cat-view">
      <p>
        {/* 猫的名称和点击数 */}
        <strong>{name}</strong>{' '}
        <span className="cat-clicks">{clicks}</span> clicks
      </p>

      {/* 猫的照片，注：标签必须正常闭合 */}
      <img src={`images/${imgUrl}`} alt={name}
        onClick={() => props.onCatClick()}
      />

      {/* 从父级获取需要的参数 */}
      <OutputInfo
        cats={props.cats}
        index={props.catIndex}
        clicks={props.cat.clicks}
      />
    </div>
  )
}

CatView.propTypes = {
  cat: PropTypes.shape({
    name: PropTypes.string,
    clicks: PropTypes.number,
    imgUrl: PropTypes.string
  }),
  onCatClick: PropTypes.func,

  cats: PropTypes.array,
  catIndex: PropTypes.number
}

export default CatView;
