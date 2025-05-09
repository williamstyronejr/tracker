export default function NoteIcon({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12 12H6V10H12V12ZM18 12H12V10H18V12ZM12 16H6V14H12V16ZM18 16H12V14H18V16ZM12 20H6V18H12V20ZM18 20H12V18H18V20Z" />
    </svg>
  );
}
