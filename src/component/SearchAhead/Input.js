import React from 'react'
const Input = (props) => {
  return(
    <div>
      <input 
        type="text"
        placeholder="search something..."
        value= {props.text}
        onChange={e => props.textChange(e.target.value)}
      />
      <button onClick={props.reset}>X</button>
    </div>
  )
}
export default Input