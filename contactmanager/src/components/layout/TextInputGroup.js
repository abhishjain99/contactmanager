// text input group component for name, email, phone
// stateless funcitonal component and it will yake in props.

import React from 'react';
import PropTypes from 'prop-types'

const TextInputGroup = ({ label, name, value, placeholder, type, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {/* instead of passing props to TextInputGroup function and then using it as props.lable, props.name etc, we directly passed the parameters */}
      <input type={type} className="form-control control-lg" placeholder={placeholder} name={name} value={value} onChange={onChange} />
    </div>
  )
}

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup;