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
        <div className="flex flex-col">
          <input type="text" {...rest} ref={ref} className="rounded-md" />
          {(caption || label) && (
            <div className="flex flex-row justify-between text-sm text-gray">
              <span>{label}</span>
              <span className="text-gray-500">{caption}</span>
            </div>
          )}
        </div>
      </>
    );
  }
);
