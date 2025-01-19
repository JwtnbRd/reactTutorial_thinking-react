import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  caption?: string;
  label?: string;
};

export const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  function TextInput(props, ref) {
    const { label, caption, ...rest } = props;

    return (
      <>
        <div>
          <input type="text" {...rest} ref={ref} />
          {(caption || label) && (
            <div>
              <span>{label}</span>
              <span>{caption}</span>
            </div>
          )}
        </div>
      </>
    );
  }
);
