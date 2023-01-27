import React from 'react'

export default function TextInput({value,onChange}) {
  return (
    <input
    type="text"
    className="form-control"
    value={value}
    onChange={onChange}
  />
  )
}
