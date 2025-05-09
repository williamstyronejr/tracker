import type { MouseEvent } from "react";

export default function Checkbox({
  checked,
  onClick,
}: {
  onClick: (e: MouseEvent) => void;
  checked?: boolean;
}) {
  return (
    <div>
      <input
        id=""
        type="checkbox"
        className=""
        checked={checked}
        onClick={onClick}
      />
    </div>
  );
}
