import React from 'react'

export const BorderSelector = (props) => {
  return (
    <div className="flex justify-around items-center">
      <label>
        <span className="mh2">Square:</span>
        <input
          type="radio"
          name="shape"
          value="square"
          checked={props.checkedValue === "square" || !props.checkedValue}
          />
      </label>

      <label>
        <span className="mh2">Circle:</span>
        <input
          type="radio"
          name="shape"
          value="circle"
          checked={props.checkedValue === "circle"}
          />
      </label>
    </div>
  )
}
