import React from 'react'
import PropTypes from 'prop-types'

function OutputInfo(props) {
  let { cats, index, clicks } = props;

  return (
    <p>
      共 {cats.length} 只猫咪，当前为第 {index + 1} 只，被点击了 {clicks} 次
    </p>
  )
}

OutputInfo.propTypes = {
  cats: PropTypes.array,
  index: PropTypes.number,
  clicks: PropTypes.number
}

export default OutputInfo;
