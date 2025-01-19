import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  value?: string;
  defaultChecked?: boolean;
};

export const CheckBox = React.forwardRef<HTMLInputElement, InputProps>(
  function CheckBox(props, ref) {
    const { label, value, defaultChecked, ...rest } = props;
    return (
      <>
        <div className="flex items-center gap-1">
          <input
            id={value ? `${rest.name}_${value}` : rest.name}
            type="checkbox"
            value={value}
            defaultChecked={defaultChecked}
            {...rest}
            ref={ref}
          />
          <label htmlFor={value ? `${rest.name}_${value}` : rest.name}>
            {label}
          </label>
        </div>
      </>
    );
  }
);
