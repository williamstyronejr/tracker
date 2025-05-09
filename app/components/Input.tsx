"use client";

import { useState } from "react";

const InputErrors = ({ error }: { error?: string[] | string }) => {
  if (!error) return null;

  if (Array.isArray(error))
    return (
      <>
        {error.map((err) => (
          <span
            key={err}
            data-cy="input-error"
            className="block text-red-500 text-sm"
          >
            {err}
          </span>
        ))}
      </>
    );

  return (
    <span data-cy="input-error" className="block text-red-500 text-sm">
      {error}
    </span>
  );
};

export default function Input({
  name,
  label,
  type,
  placeholder,
  initialValue,
  error,
}: {
  name: string;
  label: string;
  type: string;
  initialValue?: string;
  placeholder?: string;
  error?: string[] | string;
}) {
  const [value, setValue] = useState(initialValue || "");

  return (
    <label className="block my-5" htmlFor={name}>
      <span className="block my-1">{label}</span>

      {type !== "textarea" ? (
        <input
          className={`w-full bg-white text-black py-2 px-4 border rounded  ${
            error
              ? "border-red-500 focus:shadow-[0_0_0_1px_rgba(244,33,46,1)]"
              : "border-slate-500 focus:shadow-[0_0_0_1px_rgba(59,93,214,1)]"
          }  outline-0`}
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(evt) => setValue(evt.target.value)}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className="w-full bg-white text-black py-2 px-4 border rounded"
          value={value}
          onChange={(evt) => setValue(evt.currentTarget.value)}
        />
      )}

      <InputErrors error={error} />
    </label>
  );
}
