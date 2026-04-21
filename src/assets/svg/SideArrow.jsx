import * as React from "react";
const SideArrow = (props) => (
  <svg
    width={6}
    height={10}
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.75 0.84375L0.8125 4.78125L4.75 8.71875" fill="#c2202d" />
    <path
      d="M4.75 0.84375L0.8125 4.78125L4.75 8.71875"
      stroke="#242424"
      strokeWidth={1.08281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SideArrow;
