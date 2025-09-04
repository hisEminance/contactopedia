import React from "react";

const Input = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "form-control form-control-sm",
  wrapperClass = "col-12 col-md-4 p-1",
  ariaLabel
}) => {
  return (
    <div className={wrapperClass}>
      <input
        id={id}
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel || placeholder}
      />
    </div>
  );
};



export default Input;
