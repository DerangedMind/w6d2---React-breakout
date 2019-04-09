import React from 'react'

const NameSayer = ({nameToSay}) => {
  const sayName = () => {
    if (nameToSay.length > 0) {
      return (<div>Your name is {nameToSay}.</div>)
    }
  }

  return (
    <div>{sayName()}</div>
  )
}

export default NameSayer
