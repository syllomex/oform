import React from 'react'

function Label({ children, ...props }) {
  const label = (
    <label
      htmlFor={children.props.id}
      className={props.className || 'text-muted mt-1'}
      {...props}
    >
      {props.text ? props.text : '[label text]'}
      {children.props.required && (
        <React.Fragment>
          <span className='text-danger'> *</span>
          <span> {props.note}</span>
        </React.Fragment>
      )}
    </label>
  )

  return (
    <React.Fragment>
      {props.small === 'false' ? label : <small>{label}</small>}
      {children}
    </React.Fragment>
  )
}

export default Label
