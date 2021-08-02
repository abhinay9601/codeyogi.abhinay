import React, { FC, InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  touched?: boolean;
  error?: string;
}
const Input: FC<Props> = ({
  touched,
  error,
  id,
  className,
  placeholder,
  ...rest
}) => {
  return (
    <div>
  <div className="  ">
              <div className="rounded-md -space-y-px shadow-xl">
               {id && placeholder && <label htmlFor={id} className="sr-only">
                  {placeholder}
                </label>} 
                <input
                id={id}
                  {...rest}
                  className={"pl-8 appearance-none  relative block w-full  px-3 py-2 border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm " + className}
                  placeholder={placeholder}
                />
              </div>
                <div className="h-6 shadow-none">
               {touched && (
                <div className="text-red-500">{error}</div>
              )}
              </div>
              
            
            </div>
 </div>
  );
};
Input.defaultProps ={} 
export default memo(Input);
