import React from "react";

const TextField = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  optional = false,
  error = null,
  inputClassName = "",
  labelClassName = "",
  containerClassName = "",
  icon: Icon = null, // Add icon prop
  onIconClick = null, // Add handler for icon click
}) => {
  const placeholderText = `${label}${optional ? " (optional)" : ""}`;
  const hasError = !!error;

  return (
    <div className={`relative ${containerClassName}`}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholderText}
        className={`peer block w-full px-3 py-3 bg-white border ${
          hasError ? "border-red-500" : "border-gray-500"
        } rounded-md text-base text-black placeholder-transparent 
                   focus:outline-none focus:ring-0 ${
                     hasError ? "focus:border-red-500" : "focus:border-gray-700"
                   } ${Icon ? "pr-10" : ""} ${inputClassName}`} // Add padding-right if icon exists
      />
      <label
        htmlFor={id}
        className={`absolute left-3 -top-2.5 text-xs ${
          hasError ? "text-red-500" : "text-gray-500"
        } bg-white px-1 transition-all 
                   peer-placeholder-shown:text-base ${
                     hasError
                       ? "peer-placeholder-shown:text-red-500"
                       : "peer-placeholder-shown:text-gray-500"
                   } peer-placeholder-shown:top-3 peer-placeholder-shown:left-3
                   peer-focus:top-1 peer-focus:left-3 peer-focus:text-xs ${
                     hasError
                       ? "peer-focus:text-red-500"
                       : "peer-focus:text-gray-700"
                   }
                   ${
                     value
                       ? "-top-2.5 left-3 text-xs"
                       : "peer-placeholder-shown:top-3.5"
                   } ${labelClassName}`}
      >
        {placeholderText}
      </label>
      {Icon && (
        <div
          className={`absolute inset-y-0 right-0 flex items-center pr-3 ${
            onIconClick ? "cursor-pointer" : "pointer-events-none"
          }`}
          onClick={onIconClick}
        >
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
      )}
      {hasError && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextField;
